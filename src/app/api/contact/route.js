import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, area, location, budget = [], details } = data;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Budget:</strong> ${budget.length ? budget.join(', ') : 'N/A'}</p>
        <p><strong>Details:</strong> ${details}</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Nhà Đẹp Quảng Nam <onboarding@resend.dev>',
      to: 'nhadepquangnamvn@gmail.com',
      reply_to: email,
      subject: 'New contact form submission',
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea: ${area}\nLocation: ${location}\nBudget: ${budget.join(', ')}\nDetails: ${details}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

