import { client, domain } from '../config/Mailgun.js';

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  res.status(200).json({
    status: "success",
    message: "Message received, email will be processed.",
  });

  setImmediate(async () => {
    try {
      const emailData = {
        from: `Portfolio Contact Form <contact@${domain}>`,
        to: 'sebastian.schoeneberger@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `You received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await client.messages.create(domain, emailData);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email asynchronously", error);
    }
  });
};

export { sendEmail };
