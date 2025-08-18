import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, area, location, budget = [], details } = data;

    await resend.emails.send({
      from: 'Nhà Đẹp Quảng Nam <onboarding@resend.dev>',
      to: 'nhadepquangnamvn@gmail.com',
      reply_to: email,
      subject: 'New contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea: ${area}\nLocation: ${location}\nBudget: ${budget.join(', ')}\nDetails: ${details}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
