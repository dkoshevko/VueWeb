import Link from "next/link"
import React from "react"

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="bg-gradient-primary dark:bg-gradient-dark pt-24">
      <div className="container">
        <h1 className="text-center uppercase text-3xl font-semibold mb-10">
          Politique de confidentialité
        </h1>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            1. Présentation
          </h2>
          <p>Cette politique de confidentialité décrit comment VUEWEB (ci-après “nous“) collecte, utilise et protège les informations personnelles fournies par les utilisateurs via le formulaire de contact de ce site web.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            2. Données collectées
          </h2>
          <p>Nous recueillons les informations que vous nous fournissez volontairement lorsque vous remplissez le formulaire de contact, à savoir :</p>
          <ul className="list-disc ml-6">
            <li>Nom</li>
            <li>Prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Message</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            3. Finalité du traitement
          </h2>
          <p>Ces données sont collectées afin de répondre à vos demandes, questions ou commentaires.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            4. Base légale du traitement
          </h2>
          <p>Le traitement de vos données repose sur votre consentement, que vous donnez en soumettant le formulaire de contact.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            5. Durée de conservation des données
          </h2>
          <p>Les informations collectées via le formulaire de contact sont conservées pendant une durée maximale de 3 ans à compter de la date de votre dernier contact ou supprimées une fois votre demande traitée, selon le cas.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            6. Destinataires des données
          </h2>
          <p>Vos données ne sont pas transmises à des tiers, sauf si la loi l‘exige.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            7. Droits des utilisateurs
          </h2>
          <p>Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de suppression, de limitation et d’opposition au traitement de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l’adresse suivante : <Link href="mailto:contact@vueweb.fr" className="underline">contact@vueweb.fr</Link>.</p>
        </div>
        <div className="pb-10">
          <h2 className="uppercase font-semibold text-lg mb-3">
            8. Sécurité des données
          </h2>
          <p>Nous prenons les mesures nécessaires pour protéger vos informations personnelles contre toute utilisation abusive, perte ou divulgation non autorisée.</p>
        </div>
      </div>
    </main>
  )
}
