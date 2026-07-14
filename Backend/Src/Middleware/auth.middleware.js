import { asyncHandler } from "../Utils/asyncHandler.utils.js";
import ApiError from "../Utils/ApiError.utils.js";
import { ApiResponse } from "../Utils/ApiResponse.utils.js";
import User from "../Models/User.model.js";
import jwt from "jsonwebtoken";

const checkJwt = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new ApiError(401, "Unauthorized: No token provided"));
    }

    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decode._id).select("-password -refreshToken");

    if (!user) {
      return next(new ApiError(401, "Unauthorized: User not found"));
    }

    req.user = user;
    next();
  } catch (error) {
    // If verification fails or any error occurs, return unauthorized error
    next(new ApiError(401, "Unauthorized: Invalid or expired token"));
  }
});

export default checkJwt;
