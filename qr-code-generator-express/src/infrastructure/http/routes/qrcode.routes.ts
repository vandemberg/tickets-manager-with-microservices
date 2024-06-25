import express from "express";
import { QrcodeController } from "../controllers/QrcodeController";

const router = express.Router();

router.post("/qrcodes", QrcodeController.create);

export default router;
