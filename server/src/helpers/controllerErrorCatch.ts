import {RequestHandler} from 'express';
import {ApiError} from '../errors/ApiError';

export function controllerErrorCatch(
  controller: RequestHandler
): RequestHandler {
  return async function (req, res, next) {
    try {
      await controller(req, res, next);
    } catch (error) {
      let message = 'Unknown Error';

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      } else if (typeof error === 'number') {
        message = error.toString();
      }

      next(ApiError.internal(message));
    }
  };
}
