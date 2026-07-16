import { Router } from "express";
import multer from "multer";
import { uploadResume } from "../Controllers/resume.controller";
import { upload } from "../Middleware/multer.middleware";
const resumeRouter=Router();




resumeRouter.route("/upload").post(
  upload.single("resume"),
  uploadResume
);

export default resumeRouter;