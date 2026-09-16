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
  const grokMarketplace = await readFile(
    join(repoRoot, ".grok-plugin/marketplace.json"),
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
  assert.match(grokMarketplace, /Project briefs/);
});

test("competitive analyst skill names Competitors MCP tools and is listed", async () => {
  const skill = await readFile(
    join(repoRoot, "skills/competitive-analyst/SKILL.md"),
    "utf8",
  );
  const readme = await readFile(join(repoRoot, "README.md"), "utf8");
  const claudeMarketplace = await readFile(
    join(repoRoot, ".claude-plugin/marketplace.json"),
    "utf8",
  );
  const grokMarketplace = await readFile(
    join(repoRoot, ".grok-plugin/marketplace.json"),
    "utf8",
  );
  const grokPlugin = await readFile(
    join(repoRoot, ".grok-plugin/plugin.json"),
    "utf8",
  );
  const codexPlugin = await readFile(
    join(repoRoot, ".codex-plugin/plugin.json"),
    "utf8",
  );

  assert.match(skill, /^name: competitive-analyst$/m);

  for (const toolName of [
    "explore_competitors",
    "mutate_competitors",
    "explore_opportunity_backlog",
    "select_organization",
    "get_overview",
  ]) {
    assert.ok(skill.includes(`\`${toolName}\``));
  }

  assert.match(readme, /`competitive-analyst`/);
  assert.match(claudeMarketplace, /Competitors/);
  assert.match(grokMarketplace, /Competitors/);
  assert.match(grokPlugin, /Competitors/);
  assert.match(codexPlugin, /Competitors/);

  assert.doesNotMatch(
    skill,
    /listCompetitorInsights|getCompetitorInsight|mutateCompetitors|setCompetitorCheckins/,
  );

  assert.doesNotMatch(
    skill,
    /`explore_insights`[\s\S]{0,120}competitor (synthesis )?insight ids?/i,
  );
});

test("grok plugin manifests are ready for local marketplace install", async () => {
  const plugin = JSON.parse(
    await readFile(join(repoRoot, ".grok-plugin/plugin.json"), "utf8"),
  );
  const marketplace = JSON.parse(
    await readFile(join(repoRoot, ".grok-plugin/marketplace.json"), "utf8"),
  );
  const mcp = JSON.parse(await readFile(join(repoRoot, ".mcp.json"), "utf8"));
  const readme = await readFile(join(repoRoot, "README.md"), "utf8");

  assert.equal(plugin.name, "deck");
  assert.equal(plugin.license, "MIT");
  assert.equal(plugin.skills, "./skills/");
  assert.equal(plugin.mcpServers, "./.mcp.json");
  assert.equal(mcp.mcpServers.deck.type, "http");
  assert.equal(mcp.mcpServers.deck.url, "https://mcp.getdeck.io/mcp");

  assert.equal(marketplace.name, "deck-plugins");
  assert.equal(marketplace.plugins.length, 1);
  const entry = marketplace.plugins[0];
  assert.equal(entry.name, "deck");
  assert.equal(entry.category, "productivity");
  assert.equal(entry.source.type, "local");
  assert.equal(entry.source.path, "./");
  assert.ok(entry.domains.includes("getdeck.io"));
  assert.ok(entry.domains.includes("mcp.getdeck.io"));
  assert.ok(entry.domains.includes("docs.getdeck.io"));
  for (const keyword of entry.keywords) {
    assert.match(keyword, /deck/i);
  }

  assert.match(readme, /grok plugin validate \./);
  assert.match(readme, /grok plugin install \. --trust/);
});
