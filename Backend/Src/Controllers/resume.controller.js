import { asyncHandler } from '../Utils/asyncHandler.utils.js';
import ApiError from '../Utils/ApiError.utils.js';
import { ApiResponse } from '../Utils/ApiResponse.utils.js';
import { uploadToCloudinary } from '../Utils/Cloudinary.utils.js';
import Resume from '../Models/Resume.model.js'; // Ensure this model is imported
// Assuming these are your utility/service functions
import { extractText } from '../Utils/pdfExtractor.utils.js'; 
import { analyzeResume } from '../Services/ai.service.js';
import { request } from 'http';

const uploadResume = asyncHandler(async (req, res) => {
  // 1. Check if file exists
  if (!req.file) {
    throw new ApiError(400, "Resume file is required");
  }

  // 2. Store file path
  const localFilePath = req.file?.path;
  if (!localFilePath) {
    throw new ApiError(400, "File path not found");
  }

  // 3. Extract text from PDF
  const extractedPdfText = await extractText(localFilePath);
  if (!extractedPdfText) {
    throw new ApiError(500, "Failed to extract text from PDF");
  }

  // 4. Upload PDF to Cloudinary
  const cloudinaryResponse = await uploadToCloudinary(localFilePath);
  if (!cloudinaryResponse || !cloudinaryResponse.url) {
    throw new ApiError(500, "Failed to upload file to cloud");
  }

  // 5. Send extracted text to AI
  const analysis = await analyzeResume(extractedPdfText);
  if (!analysis) {
    throw new ApiError(500, "Failed to analyze the resume");
  }

  // 6. Save Resume to Database
  const resume = await Resume.create({
    user: req.user._id, // Assuming auth middleware adds user to req
    title: req.body.title || req.file.originalname,
    originalFileName: req.file.originalname,
    fileUrl: cloudinaryResponse.url,
    publicId: cloudinaryResponse.public_id,
    extractedText: extractedPdfText,
    atsScore: analysis.atsScore,
    overallSummary: analysis.overallSummary,
    strengths: analysis.strengths,
    weaknesses: analysis.weaknesses,
    existingSkills: analysis.existingSkills,
    missingSkills: analysis.missingSkills,
    missingKeywords: analysis.missingKeywords,
    improvementSuggestions: analysis.improvementSuggestions,
    finalAdvice: analysis.finalAdvice
  });

  // 7. Return Response
  return res.status(201).json(
    new ApiResponse(201, resume, "Resume uploaded and analyzed successfully")
  );
});


const getAllResumes = asyncHandler(async (req, res) => {
    const userId = req.user?._id;

    if (!userId) {
        throw new ApiError(401, "Unauthorized: User ID not found");
    }

    // Added .sort({ createdAt: -1 }) to get the newest first
    const resumes = await Resume.find({ user: userId })
        .select("title originalFileName fileUrl createdAt")
        .sort({ createdAt: -1 });

    if (!resumes || resumes.length === 0) {
        throw new ApiError(404, "No resumes found for this user");
    }

    return res.status(200).json(
        new ApiResponse(200, resumes, "Resumes fetched successfully")
    );
});

const getResumeById = asyncHandler(async (req, res) => {
    const userId = req.user?._id; // Ensure this matches your auth middleware structure
    const { id: resumeId } = req.params;

    // 1. Validate if user is logged in
    if (!userId) {
        throw new ApiError(401, "Unauthorized: User not authenticated");
    }

    // 2. Validate if resumeId is a valid MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
        throw new ApiError(400, "Invalid Resume ID format");
    }

    // 3. Find the resume
    const resume = await Resume.findById(resumeId);

    // 4. Validate if resume exists
    if (!resume) {
        throw new ApiError(404, "Resume not found");
    }

    // 5. Verify ownership
    // Convert both to strings to ensure an accurate comparison
    if (userId.toString() !== resume.user.toString()) {
        throw new ApiError(403, "Forbidden: You do not have permission to view this resume");
    }

    // 6. Return success response
    return res.status(200).json(
        new ApiResponse(200, resume, "Resume fetched successfully")
    );
});


const deleteResume = asyncHandler(async (req, res) => {
    const userId = req.user?._id; // Ensure this matches your auth middleware structure
    const { id: resumeId } = req.params;

    // 1. Validate if user is logged in
    if (!userId) {
        throw new ApiError(401, "Unauthorized: User not authenticated");
    }

    // 2. Validate if resumeId is a valid MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
        throw new ApiError(400, "Invalid Resume ID format");
    }

    // 3. Find the resume
    const resume = await Resume.findById(resumeId);

    // 4. Validate if resume exists
    if (!resume) {
        throw new ApiError(404, "Resume not found");
    }

    // 5. Verify ownership
    // Convert both to strings to ensure an accurate comparison
    if (userId.toString() !== resume.user.toString()) {
        throw new ApiError(403, "Forbidden: You do not have permission to delete this resume");
    }
const cloudinaryResponse = await cloudinary.uploader.destroy(resume.publicId, {
        resource_type: "raw" 
    });

    if (cloudinaryResponse.result !== 'ok' && cloudinaryResponse.result !== 'not found') {
        throw new ApiError(500, "Failed to delete file from Cloudinary");
    }

    // 5. Delete from MongoDB
    await Resume.findByIdAndDelete(resumeId);

    return res.status(200).json(
        new ApiResponse(200, null, "Resume deleted successfully")
    );
});



export { uploadResume,
  getAllResumes,
  getResumeById,

  deleteResume, };