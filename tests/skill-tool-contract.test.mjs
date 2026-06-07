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

  assert.match(skill, /^name: deck-project-brief-generator$/m);

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

  assert.match(readme, /`deck-project-brief-generator`/);
  assert.match(codexPlugin, /Project brief/);
  assert.match(claudeMarketplace, /Project briefs/);
});
