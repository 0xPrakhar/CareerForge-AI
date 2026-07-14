import { asyncHandler } from '../Utils/asyncHandler.utils.js';
// Utility wrapper to handle async errors without writing try/catch everywhere

import ApiError from '../Utils/ApiError.utils.js';
// Custom error class to standardize API error responses

import User from '../Models/User.model.js';
// Mongoose User model for interacting with the database

// import { uploadToCloudinary } from '../Utils/cloudinay.js';
// // Utility function to upload files to Cloudinary and return their URLs

import { ApiResponse } from '../Utils/ApiResponse.utils.js';
import { uploadToCloudinary } from '../Utils/Cloudinary.utils.js';

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
const registerUser = asyncHandler(async (req, res) => {
    const { username, fullName, email, password } = req.body;

    // Validate required fields
    if (
        [username, fullName, email, password].some(
            (field) => !field?.trim()
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Normalize input
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedEmail = email.trim().toLowerCase();

    // Check for existing user
    const existingUser = await User.findOne({
        $or: [
            { username: normalizedUsername },
            { email: normalizedEmail }
        ]
    });

    if (existingUser) {
        throw new ApiError(
            409,
            "User already exists with this username or email"
        );
    }

    // Default avatar (replace with your own Cloudinary URL)
    let avatarUrl =
        "https://res.cloudinary.com/dw1rssczb/image/upload/v1784008638/user_abfhtv.png";

    // Upload avatar if provided
    if (req.file?.path) {
        const uploadResult = await uploadToCloudinary(req.file.path);

        if (!uploadResult) {
            throw new ApiError(500, "Failed to upload avatar");
        }

        // Adjust this line if your utility returns a different property
        avatarUrl = uploadResult.secure_url || uploadResult.url;
    }

    // Create user
    const user = await User.create({
        username: normalizedUsername,
        fullName: fullName.trim(),
        email: normalizedEmail,
        password, // Will be hashed by your Mongoose pre-save middleware
        avatar: {
            url: avatarUrl,
        },
    });

    // Get user without sensitive fields
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(500, "Failed to create user");
    }

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
  const { username, email, password } = req.body;

  // Validate input
  if (!username && !email) {
    throw new ApiError(400, "Username or Email is required");
  }

  if (!password) {
    throw new ApiError(400, "Password is required");
  }

  // Find user using username OR email
  const user = await User.findOne({
    $or: [
      { username: username?.toLowerCase() },
      { email: email?.toLowerCase() },
    ],
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Verify password
  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid username/email or password");
  }

  // Generate tokens
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user._id);

  // Get user without sensitive fields
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // Cookie options
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };

  // Send response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

export {
  registerUser,
  loginUser,
 
};
