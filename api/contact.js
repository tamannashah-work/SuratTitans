import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, countryCode, phone, message } = req.body;

    if (!name || !email || !message || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send the email
    const data = await resend.emails.send({
      from: 'Surat Titans Website <contact@surattians.com>',
      to: process.env.CONTACT_EMAIL || 'info@surattitans.com',
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Enquiry via Surat Titans Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
