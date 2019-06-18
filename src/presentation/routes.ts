import express from "express";
// Controllers (route handlers)
import * as rootController from "./controller/root_controller";
import * as userController from "./controller/user_controller";

import { callLog } from "./controller/concern/common";

const router = express.Router();

/**
 * Primary app routes.
 */
router.get("/", callLog, rootController.index);

router.get("/users", callLog, userController.index);
router.get("/users/new", callLog, userController._new);
router.post("/users/create", callLog, userController.create);
router.get("/users/:id/edit", callLog, userController.edit);
router.put("/users/:id/update", callLog, userController.update);
router.delete("/users/:id/delete", callLog, userController._delete);
router.get("/users/:id", callLog, userController.show);

export default router;
