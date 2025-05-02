import { client, domain } from '../config/Mailgun.js';

const requestCV = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ status: "error", message: "Email is required" });
  }

  // Immediately respond to the user
  res.status(200).json({ 
    status: "success", 
    message: "CV request received, please check your email shortly." 
  });

  // Send email asynchronously
  setImmediate(async () => {
    try {
        const emailData = {
            from: `Sebastian Schoeneberger <contact@${domain}>`,
            to: email,
            subject: "Your Requested CV & Contact Information",
            text: `
          Hello,
          
          Thank you for your interest in my work and for requesting my CV. I appreciate you taking the time to review my qualifications.
          
          You can download my CV here:
          https://sebastianschoeneberger.com/Sebastian%20Schoeneberger%20CV%20Eng%20(FS).pdf
          
          Please feel free to reach out if you have any questions or would like to discuss potential opportunities:
          Email: sebastian.schoeneberger@gmail.com
          Phone: +49 15155726745
          
          I look forward to connecting with you.
          
          Best regards,
          Sebastian Schoeneberger
            `.trim(),
          
            html: `
              <p>Hello,</p>
          
              <p>Thank you for your interest in my work and for requesting my CV. I appreciate you taking the time to review my qualifications.</p>
          
              <p>
                <strong>Download my CV:</strong>
                <a href="https://sebastianschoeneberger.com/Sebastian%20Schoeneberger%20CV%20Eng%20(FS).pdf" target="_blank">
                  Click here
                </a>
              </p>
          
              <p>Please feel free to reach out if you have any questions or would like to discuss potential opportunities:</p>
              <ul>
                <li>Email: <a href="mailto:sebastian.schoeneberger@gmail.com">sebastian.schoeneberger@gmail.com</a></li>
                <li>Phone: <a href="tel:+4915155726745">+49 15155726745</a></li>
              </ul>
          
              <p>I look forward to connecting with you.</p>
          
              <p>Best regards,<br/>
              <strong>Sebastian Schoeneberger</strong></p>
            `
          };
          

      await client.messages.create(domain, emailData);
      console.log(`CV email sent successfully to ${email}`);
    } catch (error) {
      console.error("Error sending CV email:", error);
    }
  });
};

export { requestCV };
