import express from "express";
import { objectDetection } from "./controller";


const router = express.Router();

// REQ /api/google/object-detection
router.get('/object-detection', objectDetection)

export const awsRoutes = router;