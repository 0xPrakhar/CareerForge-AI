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

const uploadResume = asyncHandler(async (req, res) => {
  // ==============================
  // Step 1: Check if file exists
  // ==============================

  // Hint:
  if (!req.file) {
    throw new ApiError(400,"resume is required");
  }

  // ==============================
  // Step 2: Store file path
  // ==============================

  const localFilePath = req.file?.path
  if(!localFilePath){
    throw new ApiError(400,"file not found")
  }

  // ==============================
  // Step 3: Upload PDF to Cloudinary
  // ==============================
  

 const cloudinaryResponse = await uploadToCloudinary(localFilePath)
 if(!cloudinaryResponse){
 throw new ApiError(500,"failed to upload")
 }
 else{
    ApiResponse(200,"file upload on cloudinay successfully")
 }

  // Check if upload was successful

  // ==============================
  // Step 4: Extract text from PDF
  // ==============================

  // const extractedText = ?

  // Check if text extraction worked

  // ==============================
  // Step 5: Send extracted text to AI
  // ==============================

  // const analysis = ?

  // analysis should contain:
  // atsScore
  // overallSummary
  // strengths
  // weaknesses
  // existingSkills
  // missingSkills
  // missingKeywords
  // improvementSuggestions
  // finalAdvice

  // ==============================
  // Step 6: Save Resume
  // ==============================

  // const resume = await Resume.create({
  //   user: ?,
  //   title: ?,
  //   originalFileName: ?,
  //   fileUrl: ?,
  //   publicId: ?,
  //   extractedText: ?,
  //   atsScore: ?,
  //   overallSummary: ?,
  //   strengths: ?,
  //   weaknesses: ?,
  //   existingSkills: ?,
  //   missingSkills: ?,
  //   missingKeywords: ?,
  //   improvementSuggestions: ?,
  //   finalAdvice: ?
  // });

  // ==============================
  // Step 7: Return Response
  // ==============================

  return res.status(201).json(
    new ApiResponse(
      201,
      resume,
      "Resume uploaded and analyzed successfully"
    )
  );
});


export{uploadResume}