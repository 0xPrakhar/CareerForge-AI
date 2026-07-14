import { asyncHandler } from '../Utils/asyncHandler.utils.js';
// Utility wrapper to handle async errors without writing try/catch everywhere

import ApiError from '../Utils/ApiError.utils.js';
// Custom error class to standardize API error responses

import User from '../Models/User.model.js';
// Mongoose User model for interacting with the database

// import { uploadToCloudinary } from '../Utils/cloudinay.js';
// // Utility function to upload files to Cloudinary and return their URLs

import { ApiResponse } from '../Utils/ApiResponse.utils.js';

// generate the accesss token or refresh token
const generateAccessAndRefreshTokens = async (userId) => {
  // Implementation for generating access and refresh tokens
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false })
    return { accessToken, refreshToken };


  } catch (error) {
    throw new ApiError(500, "Failed to generate  Refresh and Access tokens");
  }
};

// Register the user
const registerUser=asyncHandler(async(req,res)=>{
    const {username,fullName,email,password}=req.body;
    
    //check all fields are there or not
    if([username,fullName,email,password].some(field => !field?.trim())){
     throw new ApiError(400, "All fields are required");
    };
    //normalizeduser
      const normalizedUsername = username.toLowerCase();
      const normalizedemail = email.toLowerCase();
      
      // Check if a user already exists with the same username OR email
  const existingUser = await User.findOne({
    $or: [ { username: normalizedUsername },
        { email: normalizedemail }]
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists with this username or email");
  }

    const createNewUser= await User.create({
        username:normalizedUsername,
        fullName,
        email:normalizedemail,
         avatar,
         password
    })
//check the use is created or not 
const createdUser = await User.findById(createNewUser._id).select("-password -refreshToken")
 if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  // Send success response back to frontend
  return res.status(201).json(
    new ApiResponse(
    201,
    createdUser,
    "User registered successfully"
)
  );

});


//login

const loginUser = asyncHandler(async (req, res) => {
  console.log("Request Body:", req.body); // Add this line for debugging
  // 1. Get user details from the request body
  const { username, email, password } = req.body;

  // 2. Validate input
  if (!username && !email) {
    throw new ApiError(400, "Username or email is required");
  }
  if (!password) {
    throw new ApiError(400, "Password is required");
  }

  // 3. Find the user in the database by username or email (case-insensitive)
  const user = await User.findOne({
    $or: [
      { username: username?.toLowerCase() },
      { email: email?.toLowerCase() },
    ],
  });

  if (!user) {
    throw new ApiError(404, "User not found with this email or username");
  }

  // 4. Check if the password matches (simple comparison, no hashing)
  if (user.password !== password) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // 5. Get the logged-in user's data, but hide the password
  const loggedInUser = await User.findById(user._id).select("-password");

  // 6. Send a successful response
  return res.status(200).json(new ApiResponse(200, loggedInUser, "User logged in successfully"));
});

export {
  registerUser,
  loginUser,
 
};
