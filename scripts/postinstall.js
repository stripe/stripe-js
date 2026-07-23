#!/usr/bin/env node

/**
 * Best-effort install-time hint for AI coding agents that support
 * plugin install suggestions. This never fails the install: any error
 * is swallowed so `npm install` always succeeds regardless of this script.
 */

'use strict';

const CLAUDE_CODE_PLUGIN_HINT =
  '<claude-code-hint v="1" type="plugin" value="stripe@claude-plugins-official" />';

function emitClaudeCodePluginHint() {
  if (process.env.CLAUDECODE) {
    process.stderr.write(`${CLAUDE_CODE_PLUGIN_HINT}\n`);
  }
}

const main = () => {
  emitClaudeCodePluginHint();
};

try {
  if (require.main === module) {
    main();
  }
} catch (_) {
  // Never fail SDK installation because of a hint.
}
