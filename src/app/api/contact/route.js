import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, area, location, budget = [], details } = data;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.5;">
        <p><strong>Họ và tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Điện thoại:</strong> ${phone}</p>
        <p><strong>Diện tích:</strong> ${area}</p>
        <p><strong>Địa chỉ:</strong> ${location}</p>
        <p><strong>Ngân sách :</strong> ${budget.length ? budget.join(', ') : 'N/A'}</p>
        <p><strong>Yêu cầu chi tiết:</strong> ${details}</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Nhà Đẹp Quảng Nam <onboarding@resend.dev>',
      to: 'nhadepquangnam.vn@gmail.com',
      reply_to: email,
      subject: `Thông tin liên hệ của khách hàng ${name} `,
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea: ${area}\nLocation: ${location}\nBudget: ${budget.join(', ')}\nDetails: ${details}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

