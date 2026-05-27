#!/usr/bin/env bash
# Install Stripe · Charge customer into both ChatGPT and Claude.
# Equivalent to: npx mcp-apps install stripe-charge --host both
set -e
if ! command -v npx >/dev/null 2>&1; then
  echo "npx not found. Install Node.js 18+ and try again."
  exit 1
fi
exec npx -y mcp-apps install stripe-charge --host both "$@"
