import express from "express";
import { translate } from "../controllers/translate.controllers.js";
import checkApiKey from "../middlewares/checkApiKey.js";

const router = express.Router();

router.post("/", checkApiKey, translate);

export default router;