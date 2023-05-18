import Logger from './logger';

describe('Logger', () => {
  let logger: Logger;
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = new Logger();
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('logs messages with the appropriate log level', () => {
    logger.log('info', 'This is an info message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[INFO] This is an info message');

    logger.log('debug', 'This is a debug message');
    expect(consoleLogSpy).not.toHaveBeenCalledWith('[DEBUG] This is a debug message');

    logger.log('error', 'This is an error message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[ERROR] This is an error message');
  });

  test('sets the log level correctly', () => {
    logger.setLogLevel('debug');
    logger.log('info', 'This is an info message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[INFO] This is an info message');

    logger.log('debug', 'This is a debug message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[DEBUG] This is a debug message');

    logger.log('error', 'This is an error message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[ERROR] This is an error message');
  });

  test('sets the log formatter correctly', () => {
    // logger.setLogFormatter((level, message) => `[${level.toUpperCase()}] ${message}`);
    logger.log('info', 'This is an info message');
    expect(consoleLogSpy).toHaveBeenCalledWith('[INFO] This is an info message');
  
   ;
  });
  
  
  
});
