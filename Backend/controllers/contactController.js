import { client, domain } from '../config/Mailgun.js';

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const emailData = {
    from: `Contact Form <contact@${domain}>`,
    to: 'youremail@example.com', // Replace with your email address
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await client.messages.create(domain, emailData);
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
};

export { sendEmail };
