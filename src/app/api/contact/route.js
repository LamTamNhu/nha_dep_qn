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

    // Configurable via env so the sender/recipient can change once a domain
    // is verified in Resend, without touching code.
    const fromAddress =
      process.env.CONTACT_EMAIL_FROM || 'Nhà Đẹp Quảng Nam <onboarding@resend.dev>';
    const toAddress = process.env.CONTACT_EMAIL_TO || 'nhadepquangnam.vn@gmail.com';

    const { data: sent, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email || undefined,
      subject: `Thông tin liên hệ của khách hàng ${name} `,
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea: ${area}\nLocation: ${location}\nBudget: ${budget.join(', ')}\nDetails: ${details}`,
    });

    // Resend SDK v4 returns { data, error } instead of throwing on API errors.
    // Without this check a rejected send (e.g. unverified domain) still looked
    // like success, so the form reported "sent" while nothing was delivered.
    if (error) {
      console.error('Resend send failed:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: sent?.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

