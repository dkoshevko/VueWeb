import { UserEmailTemplate, AdminEmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body", body);

    const { email, firstName, lastName, msg, phone, subject } = body;

    // Email to the user
    const userEmailData = await resend.emails.send({
      from: 'Équipe VueWeb <contact@vueweb.fr>',
      to: email,
      subject: 'Demande de contact VueWeb',
      react: UserEmailTemplate({ firstName: firstName }),
    });

    // Email to the team
    const adminEmailData = await resend.emails.send({
      from: 'Équipe VueWeb <contact@vueweb.fr>',
      to: 'denys.koshevko@vueweb.fr',
      subject: 'Nouvelle demande de contact',
      react: AdminEmailTemplate({ firstName, lastName, email, phone, msg, subject }),
    });

    if (userEmailData.status === "success" && adminEmailData.status === "success") {
      return NextResponse.json({ message: "Email envoyé avec succès !" });
    }

    return NextResponse.json({ userEmailData, adminEmailData });
  } catch (error) {
      console.log("error", error);
      return NextResponse.json({ error: 'Une erreur s\'est produite. Veuillez réessayer.' });
  }
}
