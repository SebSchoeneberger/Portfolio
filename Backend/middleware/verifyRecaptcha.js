import axios from 'axios';

const verifyRecaptcha = async (req, res, next) => {

  const { recaptchaToken } = req.body;
  if (!recaptchaToken) {
    return res.status(400).json({ status: "error", message: "reCAPTCHA token is missing" });
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET;
    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const response = await axios.post(url, null, {
      params: {
        secret: secretKey,
        response: recaptchaToken,
      },
    });
    const { success, score } = response.data;
    if (!success || score < 0.5) {
      return res.status(400).json({ status: "error", message: "reCAPTCHA verification failed" });
    }
    next();
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ status: "error", message: "reCAPTCHA verification error" });
  }
};

export default verifyRecaptcha;
