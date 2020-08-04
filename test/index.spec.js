'use strict';
const Logging = require('../src');

describe('Logging Test', () => {
  it('Initialize without config should succeed', () => {
    Logging.initialize();
    expect(Logging.configuration).toEqual({
      appenders: { mainConsole: { type: 'console' } },
      categories: { default: { appenders: ['mainConsole'], level: 'debug' } },
    });
  });
  it('Initialize with config should succeed', () => {
    const config = {
      appenders: { mainConsole: { type: 'console' } },
      categories: { default: { appenders: ['mainConsole'], level: 'debug' } },
    };
    Logging.initialize(config);
    expect(Logging.configuration).toEqual(config);
  });
  it('Initialize with bad config should throw error', () => {
    const t = () => {
      const config = {
        appenders: { mainConsole: { teype: 'console' } },
        categories: { default: { appenders: ['mainConsole'], level: 'debug' } },
      };
      Logging.initialize(config);
    };
    expect(t).toThrow(Error);
  });
});
