import { asyncHandler } from '../Utils/asyncHandler.js';
// Utility wrapper to handle async errors without writing try/catch everywhere

import ApiError from '../Utils/ApiError.js';
// Custom error class to standardize API error responses

import User from '../Models/User.model.js';
// Mongoose User model for interacting with the database

// import { uploadToCloudinary } from '../Utils/cloudinay.js';
// // Utility function to upload files to Cloudinary and return their URLs

import { ApiResponse } from '../Utils/ApiResponse.js';


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

const loginUser=asyncHandler(async()=>{
const {username,email,password}=req.body;
 //normalizeduser
      const normalizedUsername = username.toLowerCase();
      const normalizedemail = email.toLowerCase();
      if(!normalizedUsername&&!normalizedemail){
        throw new ApiError(401, "Incorrect username or email");
      }
       if(!password){
        throw new ApiError(401, "Password is invaild or worng");
      }
       const user = await User.findOne({ $or: [{ email }, { username }] });
  if (!user) {
    throw new ApiError(404, "User not found with this email or username");
  }

const user = await db.collection('users').findOne({ email: req.body.email });

     if (user.password === req.body.password) {
    console.log("Authentication successful!");
} else {
    console.log("Incorrect password.");
}

})