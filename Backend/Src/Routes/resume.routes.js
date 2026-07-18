import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import upload from '../Middleware/multer.middleware.js'

import {
  uploadResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resume.controller.js";

const router = Router();

// Upload Resume
router.post(
  "/upload",
  verifyJWT,
  upload.single("resume"),
  uploadResume
);

// Get all resumes of logged-in user
router.get(
  "/",
  verifyJWT,
  getAllResumes
);

// Get single resume
router.get(
  "/:resumeId",
  verifyJWT,
  getResumeById
);

// Update resume
router.patch(
  "/:resumeId",
  verifyJWT,
  updateResume
);

// Delete resume
router.delete(
  "/:resumeId",
  verifyJWT,
  deleteResume
);

export default router;