import Link from "next/link"
import React from "react"

export default function MentionsLegales() {
  return (
    <main className="bg-gradient-primary dark:bg-gradient-dark pt-24">
      <div className="container">
        <h1 className="text-center uppercase text-3xl font-semibold mb-10">
          Mentions Légales
        </h1>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            1. Présentation du site
          </h2>
          <p>Le présent site internet, accessible à l’adresse www.vueweb.fr (ci-après le “Site“), est édité par la société VueWeb, agence spécialisée dans la création de sites internet et le développement de solutions digitales.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            2. Éditeur
          </h2>
          <p>SAS VUEWEB</p>
          <p>36 avenue des Sources, 78170 La Celle-Saint-Cloud</p>
          <p>RCS VERSAILLES 930 261 821</p>
          <p>SIRET : 93026182100019</p>
          <div className="my-3">
            <p>Directeur de la publication :</p>
            <p>Denys KOSHEVKO</p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            3. Hébergement du site
          </h2>
          <p>HOSTINGER INTERNATIONAL LTD</p>
          <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <p>Joignable par le moyen suivant : <Link href="https://www.hostinger.fr/contact" target="blank" className="underline">https://www.hostinger.fr/contact</Link></p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            4. Propriété intellectuelle
          </h2>
          <p>Tous les éléments présents sur ce Site (textes, images, graphismes, logos, vidéos, etc.) sont la propriété exclusive de VueWeb, sauf mention contraire. Toute reproduction, représentation, modification ou adaptation totale ou partielle de ces éléments sans autorisation préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            5. Données personnelles
          </h2>
          <p>Les informations recueillies via le formulaire de contact sont destinées à répondre à vos demandes. Elles sont conservées pendant une durée maximale de 3 ans à compter de la date de votre dernier contact, ou sont supprimées une fois votre demande traitée, selon le cas et ne sont en aucun cas transmises à des tiers. Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d’un droit d‘accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l‘adresse suivante : <Link href="mailto:contact@vueweb.fr" className="underline">contact@vueweb.fr</Link>.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            6. Utilisation des cookies
          </h2>
          <p>Ce site n’utilise pas de cookies pour collecter des données personnelles ou de suivi de navigation.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            7. Limitation de responsabilité
          </h2>
          <p>VueWeb décline toute responsabilité en cas de dysfonctionnement, de virus ou d‘autres problèmes techniques qui pourraient affecter votre matériel informatique ou vos données suite à l‘utilisation du Site. En outre, VueWeb ne pourra être tenue responsable des éventuelles erreurs ou omissions dans le contenu publié sur le Site.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            8. Liens hypertextes
          </h2>
          <p>Le Site peut contenir des liens vers d’autres sites internet. VueWeb n‘a pas de contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de protection des données.</p>
        </div>
        <div className="mb-6">
          <h2 className="uppercase font-semibold text-lg mb-3">
            9. Droit applicable
          </h2>
          <p>Les présentes mentions légales sont régies par la législation française. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront compétents.</p>
        </div>
        <div className="pb-10">
          <h2 className="uppercase font-semibold text-lg mb-3">
            10. Contact
          </h2>
          <p>Pour toute question ou demande d‘information, vous pouvez nous contacter :</p>
          <p>Par email : <Link href="mailto:contact@vueweb.fr" className="underline">contact@vueweb.fr</Link></p>
          <p>Par courrier : VueWeb, 36 avenue des Sources, 78170 La Celle-Saint-Cloud</p>
        </div>
      </div>
    </main>
  )
}
