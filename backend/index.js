import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.routes.js";
import userRoute from "./route/user.router.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();
const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URL;

try {
  mongoose.connect(URL);
  console.log("connected to mongodb...");
} catch (error) {
  console.log(error);
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
