import express from "express";
import {apiRoutes} from "./api/routes";

const router = express.Router();

// REQ /api/
router.use('/api', apiRoutes)

router.get('/', (request, response) => {
    response.send("Hello World!")
})

export const routesRouter = router;