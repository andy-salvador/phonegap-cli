/**
 * Command line interface object.
 */

function CLI() {
    // FIX: Must expose root elements to sub-elements
    this.local.parent = this;
    this.remote.parent = this;
}

/**
 * Command line commands.
 */

CLI.prototype.app = require('./cli/app');
CLI.prototype.argv = require('./cli/argv');
CLI.prototype.build = require('./cli/build');
CLI.prototype.create = require('./cli/create');
CLI.prototype.help = require('./cli/help');
CLI.prototype.local = require('./cli/local');
CLI.prototype.local.build = require('./cli/local.build');
CLI.prototype.remote = require('./cli/remote');
CLI.prototype.remote.build = require('./cli/remote.build');
CLI.prototype.remote.login = require('./cli/remote.login');
CLI.prototype.remote.logout = require('./cli/remote.logout');
CLI.prototype.unknown = require('./cli/unknown');
CLI.prototype.version = require('./cli/version');

/*
 * Expose the CLI object.
 */

module.exports = CLI;