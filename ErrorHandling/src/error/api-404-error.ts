import { httpCode } from "../enum/http-status-code.enum";
import { BaseError } from "./base-error";

export class Api404Error extends BaseError {
  constructor(
    message: string,
    statusCode = httpCode.NOT_FOUND,
    name = "Not found.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, message);
  }
}
