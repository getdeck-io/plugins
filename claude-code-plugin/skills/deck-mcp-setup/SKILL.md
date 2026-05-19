---
name: deck-mcp-setup
description: Help users connect the Deck plugin to the Deck MCP server. Use when a user asks how to enable Deck MCP, authenticate Deck, fix missing Deck MCP tools, choose an organization, or configure Claude Code/Codex to access Deck feedback.
---

# Deck MCP Setup

## Goal

Help the user connect Claude Code or Codex to Deck's hosted MCP server so Deck skills can use live customer feedback, themes, insights, opportunities, initiatives, and NPS data.

## Connection Details

- Server name: `deck`
- HTTP URL: `https://mcp.getdeck.io/mcp`
- Authentication: Clerk OAuth with the user's existing Deck account
- Organization access: gated by the Deck organization's MCP settings

## Setup Flow

1. Tell the user to enable MCP in Deck:
   - Open Deck.
   - Go to `Settings -> MCP`.
   - Toggle `Enable MCP Access`.
   - Choose allowed roles, usually admins and members.
   - Save changes.
2. Confirm the plugin-provided MCP server is installed:
   - In Claude Code, run `/mcp` or `claude mcp list` and look for `deck`.
   - In Codex, run `codex mcp list` and look for `deck`.
3. Authenticate:
   - In Claude Code, open `/mcp` and follow the browser OAuth flow.
   - In Codex, run `codex mcp login deck` or follow the browser OAuth prompt.
   - Sign in with the user's existing Deck account.
4. Resolve organization context:
   - Single-org users can usually omit `org_id`.
   - Multi-org users should call `select_organization` or provide `org_id`.
5. Verify with a read-only question:
   - "Use Deck to summarize my top feedback themes."
   - "Use Deck to break down recent detractor feedback."

## Troubleshooting

- If no Deck tools appear, ask the user to reload plugins or restart the client.
- If authentication fails, ask the user to re-run OAuth from MCP management.
- If access is denied, ask an org admin to enable MCP access and allow the user's role.
- If the wrong org is selected, use `select_organization` with the intended `org_id`.
- If the server URL is requested manually, use `https://mcp.getdeck.io/mcp`.
- For manual Claude Code setup, use `claude mcp add --transport http deck https://mcp.getdeck.io/mcp`.
- For manual Codex setup, use `codex mcp add deck --url https://mcp.getdeck.io/mcp`.

## Guardrails

- Do not ask users for API keys. Deck MCP uses OAuth.
- Do not invent org IDs. Ask the user to select from `select_organization` results.
- Do not claim Deck data is available until the MCP server is authenticated and authorized.
