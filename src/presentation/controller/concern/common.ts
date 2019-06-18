import { Request, Response, NextFunction } from "express";
import logger from "../../../infrastructure/logging/logger";

/**
 * call log
 */
export const callLog = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}: START`);
  next();
  logger.info(`${req.method} ${req.path}: END`);
};
