import FormData from "form-data";
import Mailgun from "mailgun.js";
import dotenv from "dotenv";

dotenv.config();

const mailgun = new Mailgun(FormData);
const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "API_KEY",
  url: "https://api.eu.mailgun.net/"
});

const domain = process.env.MAILGUN_DOMAIN || "sebastianschoeneberger.com";

export { client, domain };
