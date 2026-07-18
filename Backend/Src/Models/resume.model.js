import mongoose from "mongoose";
import User from "./user.model.js";

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    originalFileName: {
      type: String,
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    extractedText: {
      type: String,
      required: true,
    },

    atsScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    overallSummary: {
      type: String,
    },

    strengths: [
      {
        type: String,
      },
    ],

    weaknesses: [
      {
        type: String,
      },
    ],

    existingSkills: [
      {
        type: String,
      },
    ],

    missingSkills: [
      {
        type: String,
      },
    ],

    missingKeywords: [
      {
        type: String,
      },
    ],

    improvementSuggestions: [
      {
        type: String,
      },
    ],

    finalAdvice: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Resume =
  mongoose.models.Resume || mongoose.model("Resume", resumeSchema);

export default Resume;