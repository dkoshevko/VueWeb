import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="flex flex-col items-center py-16">
      <h2 className="uppercase text-3xl font-semibold mb-10">Nos services</h2>
      <div className="container grid grid-cols-3 gap-24">
        <ServiceCard
          image="/icons/create-site.svg"
          title="Création de site"
          description="Notre service de création de site allie design innovant et développement performant pour vous offrir une
          présence en ligne sur mesure. De la conception graphique à l'implémentation technique, nous assurons
          une expérience utilisateur optimale et une compatibilité sur tous les appareils. Faites confiance à notre
          expertise pour un site web qui reflète parfaitement votre identité de marque et attire vos clients
          potentiels."
        />
        <ServiceCard
          image="/icons/recreate-site.svg"
          title="Refonte de site"
          description="Donnez une nouvelle vie à votre site web existant avec notre service de refonte. Nous analysons votre
          site actuel pour identifier les améliorations nécessaires en matière de design, de performance et de
          fonctionnalité. En modernisant votre site, nous vous aidons à rester compétitif et à offrir une expérience
          utilisateur exceptionnelle, tout en conservant les éléments essentiels de votre marque."
        />
        <ServiceCard
          image="/icons/seo.svg"
          title="SEO & Optimisation"
          description="Boostez la visibilité de votre site web avec notre service d'optimisation SEO. Grâce à des stratégies de
          référencement avancées, nous améliorons votre positionnement sur les moteurs de recherche, attirant
          ainsi plus de trafic qualifié vers votre site. Nos experts en SEO travaillent sur tous les aspects, des motsclés au contenu, pour garantir une augmentation de votre visibilité en ligne et de votre taux de
          conversion."
        />
      </div>
    </section>
  );
}
