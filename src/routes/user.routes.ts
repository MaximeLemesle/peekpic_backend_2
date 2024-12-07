import express from "express";
import { getUsersController } from "../controllers/user/getUsers.ts";
import { getUserByIdController } from "../controllers/user/getUsersById.ts";
import { createUserController } from "../controllers/user/createUser.ts";

const router = express.Router();

router.get("/", getUsersController);
router.get("/:id([0-9]+)", getUserByIdController);
router.post("/", createUserController);

export default router;