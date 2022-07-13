import express from "express";
import userController from "../controller/UserController";
import UserDatabase from "../data/UserDatabase";

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/users/profile/:id", UserDatabase.getUserById )
