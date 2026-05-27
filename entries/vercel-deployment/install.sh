#!/usr/bin/env bash
# Install Vercel · View deployment into both ChatGPT and Claude.
# Equivalent to: npx mcp-apps install vercel-deployment --host both
set -e
if ! command -v npx >/dev/null 2>&1; then
  echo "npx not found. Install Node.js 18+ and try again."
  exit 1
fi
exec npx -y mcp-apps install vercel-deployment --host both "$@"
