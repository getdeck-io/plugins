import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

test("initiative skill names current Build MCP read and mutation tools", async () => {
  const skill = await readFile(
    join(repoRoot, "skills/initiative-brief-generator/SKILL.md"),
    "utf8",
  );

  for (const toolName of [
    "list_initiatives",
    "explore_build_initiatives",
    "list_projects",
    "explore_build_projects",
    "mutate_initiative_build",
    "mutate_opportunity_build",
    "mutate_project_build",
  ]) {
    assert.ok(skill.includes(`\`${toolName}\``));
  }

  assert.doesNotMatch(
    skill,
    /`explore_build_initiatives` to list initiatives, search by title\/slug, or fetch full initiative detail/,
  );
});

test("project brief skill names current Project MCP tools and is listed", async () => {
  const skill = await readFile(
    join(repoRoot, "skills/project-brief-generator/SKILL.md"),
    "utf8",
  );
  const readme = await readFile(join(repoRoot, "README.md"), "utf8");
  const codexPlugin = await readFile(
    join(repoRoot, ".codex-plugin/plugin.json"),
    "utf8",
  );
  const claudeMarketplace = await readFile(
    join(repoRoot, ".claude-plugin/marketplace.json"),
    "utf8",
  );

  assert.match(skill, /^name: project-brief-generator$/m);

  for (const toolName of [
    "list_projects",
    "explore_build_projects",
    "list_initiatives",
    "explore_build_initiatives",
    "explore_opportunity_backlog",
    "mutate_project_build",
  ]) {
    assert.ok(skill.includes(`\`${toolName}\``));
  }

  assert.match(readme, /`project-brief-generator`/);
  assert.match(codexPlugin, /Project brief/);
  assert.match(claudeMarketplace, /Project briefs/);
});

test("competitor skill names current Competitors MCP tools and is listed", async () => {
  const skill = await readFile(
    join(repoRoot, "skills/competitor-intelligence/SKILL.md"),
    "utf8",
  );
  const readme = await readFile(join(repoRoot, "README.md"), "utf8");
  const codexPlugin = await readFile(
    join(repoRoot, ".codex-plugin/plugin.json"),
    "utf8",
  );

  assert.match(skill, /^name: competitor-intelligence$/m);

  for (const toolName of ["explore_competitors", "mutate_competitors"]) {
    assert.ok(skill.includes(`\`${toolName}\``));
  }

  for (const action of [
    "start_research",
    "add_competitor",
    "promote_to_opportunity",
    "assign_competitor_insights",
    "set_checkins",
  ]) {
    assert.ok(skill.includes(`"${action}"`));
  }

  assert.match(readme, /`competitor-intelligence`/);
  assert.match(codexPlugin, /competitor intelligence/);
});
