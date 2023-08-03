import express from "express"
import { signup } from "../controllers/auth.js";
import { userSingupValidator } from "../validators/auth.js";
import { runValidation } from "../validators/index.js";

const router=express.Router()

router.post("/signup",userSingupValidator,runValidation,signup)


export default router;