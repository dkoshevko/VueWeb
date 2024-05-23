import React from "react";
import EngagementCard from "./EngagementCard";

export default function EngagementsSection() {
  return (
    <section id="engagements" className="flex flex-col items-center py-16">
      <h2 className="uppercase text-3xl font-semibold mb-10">Nos engagements</h2>
      <div className="container grid grid-cols-3 gap-6">
        <EngagementCard
          title="🏆 Qualité et Excellence"
          description="Nous nous engageons à fournir des services de la plus haute qualité, en
          respectant les standards d'excellence. Chaque projet est réalisé avec une attention méticuleuse aux
          détails pour garantir votre satisfaction totale."
        />
        <EngagementCard
          title="🔍 Transparence et Communication"
          description="Nous prônons une communication claire et transparente tout au long
          de notre collaboration. Vous serez informé à chaque étape du processus, assurant ainsi une coopération
          harmonieuse et sans surprises."
        />
        <EngagementCard
          title="🌱 Environnement et Écologie"
          description="Conscients de l'importance de préserver notre planète, nous intégrons des
          pratiques écoresponsables dans tous nos projets. Nous privilégions des solutions numériques durables
          et minimisons notre empreinte écologique pour contribuer à un avenir plus vert."
        />
        <EngagementCard
          title="💡 Innovation et Créativité"
          description="Nous intégrons les dernières tendances et technologies pour créer des
          solutions innovantes et créatives. Notre objectif est de vous offrir des designs uniques et des
          fonctionnalités avancées qui vous démarqueront de la concurrence."
        />
        <EngagementCard
          title="⏰ Respect des Délais"
          description="Nous comprenons l'importance des échéances et nous nous engageons à respecter
          les délais convenus. Grâce à une gestion de projet efficace, nous assurons une livraison ponctuelle sans
          compromettre la qualité."
        />
        <EngagementCard
          title="😊 Satisfaction Client"
          description="Votre satisfaction est notre priorité absolue. Nous travaillons en étroite collaboration
          avec vous pour comprendre vos besoins et dépasser vos attentes, garantissant ainsi des résultats qui
          vous enchantent et renforcent votre présence en ligne."
        />
      </div>
    </section>
  );
}
