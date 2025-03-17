import express from 'express';
import { sendEmail } from '../controllers/contactController.js';
import verifyRecaptcha from '../middleware/verifyRecaptcha.js';

const contactRouter = express.Router();

contactRouter.post('/contact', verifyRecaptcha, sendEmail);

export default contactRouter;
