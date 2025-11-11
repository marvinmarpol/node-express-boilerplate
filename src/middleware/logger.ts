import morgan from 'morgan';

// Define a custom format with timestamp and method
morgan.token('timestamp', () => new Date().toISOString());

export const logger = morgan(
  ':timestamp :method :url :status :response-time ms - :res[content-length] bytes'
);