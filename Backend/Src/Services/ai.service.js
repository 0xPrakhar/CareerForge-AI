// services/ai.service.js

import ApiError from "../Utils/ApiError.utils.js";
import openRouterClient from "../config/openRouter.js";

export const analyzeResume = async ({ resumeText }) => {
  try {
    // Validate input
    if (!resumeText || resumeText.trim().length === 0) {
      throw new ApiError(400, "Resume text is required.");
    }

    // Build prompt
    const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume using modern ATS standards.

Evaluate:
- ATS compatibility
- Resume quality
- Professional summary
- Strengths
- Weaknesses
- Existing technical and soft skills
- Missing industry-relevant skills
- Suggestions for improvement

Resume:
${resumeText}

Return ONLY valid JSON in this exact format:

{
  "atsScore": 0,
  "overallSummary": "",
  "strengths": [],
  "weaknesses": [],
  "existingSkills": [],
  "missingSkills": [],
  "improvementSuggestions": [],
  "finalAdvice": ""
}

Rules:
- Return ONLY JSON.
- No markdown.
- No explanation.
- ATS Score must be between 0 and 100.
- All list fields must be arrays.
- overallSummary and finalAdvice must be strings.
`;

    // Call OpenRouter
    const response = await openRouterClient.chat.completions.create({
      model: process.env.OPENROUTER_MODEL,
      messages: [
        {
          role: "system",
          content: "You are an expert ATS Resume Analyzer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    // Extract response
    const aiResponse = response?.choices?.[0]?.message?.content;

    if (!aiResponse) {
      throw new ApiError(500, "AI returned an empty response.");
    }

    // Clean possible markdown
    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Parse JSON
    let parsed;

    try {
      parsed = JSON.parse(cleanedResponse);
    } catch {
      throw new ApiError(500, "AI returned invalid JSON.");
    }

    // Validate response
    if (
      typeof parsed.atsScore !== "number" ||
      parsed.atsScore < 0 ||
      parsed.atsScore > 100
    ) {
      throw new ApiError(500, "Invalid ATS Score.");
    }

    if (typeof parsed.overallSummary !== "string") {
      throw new ApiError(500, "Invalid overallSummary.");
    }

    if (!Array.isArray(parsed.strengths)) {
      throw new ApiError(500, "Invalid strengths.");
    }

    if (!Array.isArray(parsed.weaknesses)) {
      throw new ApiError(500, "Invalid weaknesses.");
    }

    if (!Array.isArray(parsed.existingSkills)) {
      throw new ApiError(500, "Invalid existingSkills.");
    }

    if (!Array.isArray(parsed.missingSkills)) {
      throw new ApiError(500, "Invalid missingSkills.");
    }

    if (!Array.isArray(parsed.improvementSuggestions)) {
      throw new ApiError(500, "Invalid improvementSuggestions.");
    }

    if (typeof parsed.finalAdvice !== "string") {
      throw new ApiError(500, "Invalid finalAdvice.");
    }

    return parsed;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      error.message || "Failed to analyze resume."
    );
  }
};