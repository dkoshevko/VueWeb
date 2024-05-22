import React from "react";
import { Button } from "./ui/button";
import HeroBubble from "./HeroBubble"
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-screen gradient-bg flex items-center justify-evenly">
      <div className="flex flex-col w-1/3 gap-3">
        <h1 className="text-3xl">Transformez Votre Présence en Ligne avec Notre Expertise</h1>
        <p>
          Création de sites innovants, refonte stratégique et optimisation SEO
          pour une visibilité maximale
        </p>
        <Button size="lg" className="w-fit mt-3">
          Demandez un devis
        </Button>
      </div>
      <div className="w-1/3 relative bg-slate-200">
        <HeroBubble text="Meilleure satisfaction client" direction="-rotate-12" position="absolute -top-20" />
        <HeroBubble text="Plus de visibilité" direction="-rotate-6" position="absolute left-20 -bottom-32" />
        <HeroBubble text="Conversion de nouveaux clients" direction="rotate-[31deg]" position="absolute -right-5 -top-2" />
        <Image src="icons/web.svg" alt="" width={100} height={100} className="absolute top-1/2 left-1/2 -translate-x-1/2" />
        <Image src="icons/connection.svg" alt="" width={90} height={90} className="absolute rotate-45 top-24 left-32" />
        <Image src="icons/arrow.svg" alt="" width={70} height={70} className="absolute -rotate-6 -top-32 right-24" />
      </div>
    </section>
  );
}
