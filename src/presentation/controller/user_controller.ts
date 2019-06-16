import { Request, Response, NextFunction } from "express";

/**
 * GET users listing.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  res.render("user/index", { title: "Users" });
};
