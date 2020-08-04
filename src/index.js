'strict use';
const PkgDir = require('pkg-dir');
const Path = require('path');
const Log4JS = require('log4js');

/**
 * Common functionality class
 */
class Logging {
  /**
   * Common's constructors
   */
  constructor() {
    this._config = {};
    this.defaultLg4JSConfiguration = {
      appenders: { mainConsole: { type: 'console' } },
      categories: { default: { appenders: ['mainConsole'], level: 'debug' } },
    };
    this.logger = this.getLog4JSLogger(module.filename);
  }

  /**
   * Configuration getter
   */
  get configuration() {
    return this._config;
  }

  /**
   * Initiailizes log4js
   * @param {*} configuration - Valid log4js configuration
   */
  initialize(configuration = this.defaultLg4JSConfiguration) {
    Log4JS.configure(configuration);
    this._config = configuration;
    this.logger.debug('Logging initialized.');
  }

  /**
   * Gets logger given a module filename
   * @param {*} moduleFilename - module filename
   */
  getLog4JSLogger(moduleFilename) {
    const packageRoot = PkgDir.sync(Path.dirname(moduleFilename));
    const packageInfo = this.getPackageInfo(moduleFilename);
    return Log4JS.getLogger(
      `${packageInfo.name}-${packageInfo.version}/${Path.relative(
        packageRoot,
        moduleFilename
      )}`
    );
  }

  /**
   * Get package info for a given module filename
   * @param {*} moduleFileName - module filename
   */
  getPackageInfo(moduleFileName) {
    const packageRoot = PkgDir.sync(Path.dirname(moduleFileName));
    const packageFilename = Path.join(packageRoot, 'package.json');
    return require(packageFilename);
  }
}
const common = new Logging();
module.exports = common;
