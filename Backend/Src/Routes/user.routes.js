import { Router } from "express";

const userRouter=Router();



//register the register route
userRouter.route("/register").post(registerUser)

//login
userRouter.route("/login").post(loginUser);

export default userRouter;