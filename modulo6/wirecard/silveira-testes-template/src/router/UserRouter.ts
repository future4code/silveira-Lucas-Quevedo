import express from "express";
import { ProductsController } from "../controller/ProductsController";
import { UserController } from "../controller/UserController";






export const userRouter = express.Router();

userRouter.post("/signupProducts", new ProductsController().signupProducts);
userRouter.post("/signupUser", new UserController().signupUser);


