import express from "express";
import userRouter from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";
import resumeRouter from "./Routes/resume.routes.js";
const app = express();

// // Allow cross‑origin requests (from other websites)
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,   // Only allow requests from this website (set in .env file)
//     credentials: true,                 // Allow cookies and login info to be sent
//     methods: ["GET", "POST", "PUT", "DELETE"], // Only allow these request types
// }));

// Read cookies from incoming requests
app.use(cookieParser());



// Read JSON data from requests (like API calls)
// Limit: only accept up to 10kb of data
app.use(express.json({ limit: "10kb" }));

// Read form data (like login forms)
// extended: true means it can handle nested objects
app.use(express.urlencoded({ extended: true, limit: "10kb" }));


//register all the userRoutes 

app.use('/api/v1/users',userRouter);
//register all the resumeRoutes
app.use("api/v1/resume",resumeRouter)

export default app;
