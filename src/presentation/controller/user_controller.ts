import { Request, Response, NextFunction } from "express";
import userService from "../../app/service/user_service";
import { UserIdentifier } from "../../domain/model/user/user_identifier";

/**
 * List users.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  const userList = userService.findAll();
  res.render("user/index", { title: "Users", userList: userList });
};

/**
 * Show user.
 */
export let show = (req: Request, res: Response, next: NextFunction) => {
  // TODO: validation
  const id = req.params.id;
  const identifier = UserIdentifier.of(id);
  const user = userService.findBy(identifier);
  res.render("user/show", { title: `Show User: ${user.fullName()}`, user: user });
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
  // TODO: validation
  const id = req.params.id;
  const identifier = UserIdentifier.of(id);
  const user = userService.findBy(identifier);
  res.render("user/edit", { title: `Edit User: ${user.fullName()}`, user: user });
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
