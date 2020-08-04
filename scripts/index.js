'use strict';
const Logging = require('../src/index');
const OS = require('os');
const logger = Logging.getLog4JSLogger(module.filename);
try {
  Logging.initialize();
  const packageInfo = Logging.getPackageInfo(module.filename);
  logger.info(`packageInfo.name: ${packageInfo.name}`);
  logger.info(`packageInfo.version: ${packageInfo.version}`);
  logger.info(`OS.platform: ${OS.platform()}`);
  logger.info(`OS.arch: ${OS.arch()}`);
  logger.info(`OS.userInfo: ${JSON.stringify(OS.userInfo(), null, 2)}`);
} catch (ex) {
  console.error(ex);
}
