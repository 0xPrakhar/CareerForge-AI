import { Router } from "express";
import { registerUser, loginUser ,logoutUser,refreshAccessToken} from  "../Controllers/auth.controller.js";
import { upload } from '../Middleware/multer.middleware.js'
const userRouter=Router();



// Register User
userRouter.route("/register").post(
  upload.single("avatar"), 
  registerUser
);


// Login User
userRouter
  .route("/login")
  .post(loginUser);


// Logout User
// Later add verifyJWT here
userRouter
  .route("/logout")
  .post(logoutUser);


// Refresh Access Token
userRouter
  .route("/refresh-token")
  .post(refreshAccessToken);

export default userRouter;