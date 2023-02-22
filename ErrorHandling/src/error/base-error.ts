export class BaseError extends Error {
  constructor(
    name: string,
    statusCode: number,
    isOperational: boolean,
    message: string
  ) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    name = name;
    statusCode = statusCode;
    isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}
