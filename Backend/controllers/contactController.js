import { client, domain } from '../config/Mailgun.js';

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const emailData = {
    from: `Portfolio Contact Form <contact@${domain}>`,
    to: 'sebastian.schoeneberger@gmail.com', 
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await client.messages.create(domain, emailData);
    return res.status(200).json({ status: "success", message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ status: "error", message: 'Failed to send message', error });
  }
};

export { sendEmail };
