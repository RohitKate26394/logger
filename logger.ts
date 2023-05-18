type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogFormatter = (level: LogLevel, message: string) => string;

class Logger {
  private logLevel: LogLevel;
  private logFormatter: LogFormatter;

  constructor() {
    this.logLevel = 'info';
    this.logFormatter = (level, message) => message;
  }

  public log(level: LogLevel, message: string): void {
    if (this.shouldLog(level)) {
      const formattedMessage = this.logFormatter(level, message);
      console.log(`[${level.toUpperCase()}] ${formattedMessage}`);
    }
  }

  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  public setLogFormatter(formatter: LogFormatter): void {
    this.logFormatter = formatter;
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}

export default Logger;
