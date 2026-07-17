import { Router } from "express";
import multer from "multer";
import { uploadResume } from "../Controllers/resume.controller.js";
import { upload } from "../Middleware/multer.middleware.js";
const resumeRouter=Router();




resumeRouter.route("/upload").post(
  upload.single("resume"),
  uploadResume
);

export default resumeRouter;