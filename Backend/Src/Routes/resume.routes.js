import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import checkJwt from '../Middleware/auth.middleware.js'


import {
  uploadResume,
  getAllResumes,
  getResumeById,
  deleteResume,
} from "../Controllers/resume.controller.js";

const router = Router();

// Upload Resume
router.post(
  "/upload",
  checkJwt,
  upload.single("resume"),
  uploadResume
);

// Get all resumes of logged-in user
router.get(
  "/",
 checkJwt,
  getAllResumes
);

// Get single resume
router.get(
  "/:resumeId",
  checkJwt,
  getResumeById
);



// Delete resume
router.delete(
  "/:resumeId",
checkJwt,
  deleteResume
);

export default router;