import { Request, Response, NextFunction } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Express" });
};
