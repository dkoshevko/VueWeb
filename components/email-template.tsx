import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  msg: string;
}

export const UserEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Bonjour {firstName}!</h1>
    <p>Merci de nous avoir contacté</p>
    <p>On revient rapidement vers vous !</p>
  </div>
);


export const AdminEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, phone, msg
}) => (
  <div>
    <h1>Nouvelle demande de contact :</h1>
    <p><strong>Prénom :</strong> ${firstName}</p>
    <p><strong>Nom :</strong> ${lastName}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Message :</strong> ${msg}</p>
  </div>
)