import { Request, Response, NextFunction } from "express";

/**
 * List users.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  res.render("user/index", { title: "Users" });
};

/**
 * Show user.
 */
export let show = (req: Request, res: Response, next: NextFunction) => {
  res.render("user/show", { title: "User: xxxx" });
};

/**
 * Render user form to create.
 */
export let _new = (req: Request, res: Response, next: NextFunction) => {
  res.render("user/new", { title: "New User" });
};

/**
 * Create user.
 */
export let create = (req: Request, res: Response, next: NextFunction) => {
  // TODO:
  res.redirect("/users");
};

/**
 * Render user form to update.
 */
export let edit = (req: Request, res: Response, next: NextFunction) => {
  res.render("user/edit", { title: "User: yyyy" });
};

/**
 * Update user.
 */
export let update = (req: Request, res: Response, next: NextFunction) => {
  // TODO:
  res.redirect("/users");
};

/**
 * Delete user.
 */
export let _delete = (req: Request, res: Response, next: NextFunction) => {
  // TODO:
  res.redirect("/users");
};
