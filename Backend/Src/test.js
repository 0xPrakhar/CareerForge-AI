import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load .env FIRST
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

console.log("API Key Loaded:", !!process.env.OPENROUTER_API_KEY);

const { default: openRouterClient } = await import("./Config/openrouter.js");

try {
  const response = await openRouterClient.chat.completions.create({
    model: process.env.OPENROUTER_MODEL,
    messages: [
      {
        role: "user",
        content: "Say hello in one sentence.",
      },
    ],
  });

  console.log("\nAI Response:");
  console.log(response.choices[0].message.content);
} catch (error) {
  console.error(error);
}