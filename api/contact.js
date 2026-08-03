import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_EMAIL || 'info@surattitans.com';

export default async function handler(req, res) {
  // Handle CORS preflight request
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, countryCode, phone, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Surat Titans Website <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #6B4C9A; border-bottom: 2px solid #6B4C9A; padding-bottom: 10px;">New Enquiry Received</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${countryCode || ''} ${phone || 'Not provided'}</p>
          </div>

          <div style="margin-top: 30px; background-color: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 4px solid #6B4C9A;">
            <h3 style="margin-top: 0; color: #6B4C9A;">Message / Requirement:</h3>
            <p style="white-space: pre-wrap;">${message ? message.replace(/\n/g, '<br/>') : ''}</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
