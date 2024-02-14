import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, company, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL as string,
      subject: `Portfolio -  ${name} wants to contact you!`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`,
    });
    return NextResponse.json(
      {
        status: 'Ok',
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: 'Internal server error.',
      },
      {
        status: 500,
      }
    );
  }
}
