import express from "express";
import { awsRoutes } from "./aws/routes";


const router = express.Router();

// REQ /api/google/
router.use('/google', awsRoutes)

export const apiRoutes = router;