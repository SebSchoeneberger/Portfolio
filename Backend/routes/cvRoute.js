import express from 'express';
import { requestCV } from '../controllers/requestCvController.js';
import verifyRecaptcha from '../middleware/verifyRecaptcha.js';

const cvRouter = express.Router();

cvRouter.post('/request-cv', verifyRecaptcha, requestCV);

export default cvRouter;
