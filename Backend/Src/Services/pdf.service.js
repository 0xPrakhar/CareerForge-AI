import { readFile } from "fs/promises";
import pdfParse from "pdf-parse";
import ApiError from "../Utils/ApiError.utils.js";

export const extractText = async (filePath) => {
  try {
    // Read PDF file into a buffer
    const dataBuffer = await readFile(filePath);
    if(!dataBuffer){ throw new ApiError(500,"failed to read data") }

    // Parse the PDF
    const parsedData = await pdfParse(dataBuffer);

    // Validate extracted text
    if (!parsedData.text || parsedData.text.trim().length === 0) {
      throw new ApiError(400, "No text could be extracted from the PDF");
    }

    // Return the complete parsed object
    return parsedData;
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Failed to extract text from PDF"
    );
  }
};