import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";


import authRoute from "./routes/auth.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(morgan('dev'))

if(process.env.NODE_ENV==='dev'){
  app.use(cors({origin:process.env.CLIENT_URL}))
  
}

app.use("/auth", authRoute);

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("Connection successful")).catch((err)=>console.log("Connection error: "+err))

app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});
