import { Request, Response, NextFunction } from "express";

/**
 * GET users listing.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
};
