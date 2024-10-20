import express from "express";
const router = express.Router();

import { homePage,addTask } from "../controllers/controller";

router.get("/",homePage);
router.post ("/add",addTask);

export default router;