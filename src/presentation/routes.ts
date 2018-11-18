import express from "express";
// Controllers (route handlers)
import * as rootController from "./controller/root_controller";
import * as userController from "./controller/user_controller";

const router = express.Router();

/**
 * Primary app routes.
 */
router.get("/", rootController.index);
router.get("/users", userController.index);

export default router;
