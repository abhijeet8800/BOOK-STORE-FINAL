import express from "express";
import { signup, login } from "../controller/user.coontroller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
export default router;
