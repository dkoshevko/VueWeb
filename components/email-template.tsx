import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  msg: string;
}

const IMAGE_URL = "https://vueweb.fr/images/logo.png"

export const UserEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <img src={IMAGE_URL} alt="Logo VueWeb" width={200} />
    <h1>Bonjour {firstName}!</h1>
    <p>Merci de nous avoir contacté.</p>
    <p>Nous étudions votre demande et revenons vers vous rapidement.</p>
    <p>Nous vous remercions d’avoir choisi VueWeb.</p>
  </div>
);


export const AdminEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, phone, msg
}) => (
  <div>
    <h1>Nouvelle demande de contact via le site VueWeb :</h1>
    <p><strong>Prénom : </strong>{firstName}</p>
    <p><strong>Nom : </strong>{lastName}</p>
    <p><strong>Email : </strong>{email}</p>
    <p><strong>Téléphone : </strong>{phone}</p>
    <p><strong>Message : </strong>{msg}</p>
  </div>
)