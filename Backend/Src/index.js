import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./Db/connect.DB.js";
// Tell dotenv to read the .env file
dotenv.config({ path: "./.env" });

// connect to MongoDB 
connectDB().then(()=>{
  try{
    app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
 // Handle server errors (like port already in use)
        app.on("error", (error) => {
            console.error("Error occurred at server:", error);
        });
  }catch(error){
    console.error("Error occurred at server:", error);
  }
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

