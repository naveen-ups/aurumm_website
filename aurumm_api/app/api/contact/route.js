import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, {
        status: 400,
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aurumm.designstudio@gmail.com',
      replyTo: data.email,
      subject: `New Consultation Request from ${data.name}`,
      text: `You have received a new consultation request.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nMessage:\n${data.message || 'No additional message.'}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #0f0f10; color: #FAF7F0; border-radius: 8px; border: 1px solid #332a10;">
          <h2 style="color: #D4AF37; border-bottom: 1px solid #D4AF37; padding-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; font-weight: 500;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
            <tr>
              <td style="padding: 15px 10px; border-bottom: 1px solid rgba(212,175,55,0.18); font-weight: 600; width: 120px; color: #E7D3A4; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">Name</td>
              <td style="padding: 15px 10px; border-bottom: 1px solid rgba(212,175,55,0.18); color: #FAF7F0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 15px 10px; border-bottom: 1px solid rgba(212,175,55,0.18); font-weight: 600; color: #E7D3A4; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">Email</td>
              <td style="padding: 15px 10px; border-bottom: 1px solid rgba(212,175,55,0.18);">
                <a href="mailto:${data.email}" style="color: #D4AF37; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 15px 10px; border-bottom: 1px solid rgba(212,175,55,0.18); font-weight: 600; color: #E7D3A4; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">Phone</td>
              <td style="padding: 15px 10px; border-bottom: 1px solid rgba(212,175,55,0.18); color: #FAF7F0;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 15px 10px; font-weight: 600; color: #E7D3A4; text-transform: uppercase; letter-spacing: 1px; font-size: 12px; vertical-align: top;">Message</td>
              <td style="padding: 15px 10px; color: #FAF7F0; line-height: 1.6;">${data.message ? data.message.replace(/\n/g, '<br>') : 'No additional message.'}</td>
            </tr>
          </table>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(212,175,55,0.18); text-align: center; color: #E7D3A4; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">
            Aurumm — Bespoke Luxury
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}
