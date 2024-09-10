import React from "react";
import { Button } from "./ui/button";
import HeroBubble from "./HeroBubble";
import Image from "next/image";
import HeroAnimation from "../public/lottie/lottie-7.json";
import LottieAnimation from "./Lottie";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen bg-gradient-primary dark:bg-gradient-dark flex flex-col lg:flex-row items-center justify-evenly">
      <div className="flex flex-col mx-3 lg:mx-0 lg:w-1/3 gap-3">
        <h1 className="text-3xl font-semibold">
          Transformez Votre Présence en Ligne avec Notre Expertise
        </h1>
        <p>
          Création de sites innovants, refonte stratégique et optimisation SEO
          pour une visibilité maximale
        </p>
        <Link href="#contact">
          <Button size="lg" variant="outline" className="w-fit mt-3">
            Demandez un devis
          </Button>
        </Link>
      </div>
      <div className="w-full lg:w-1/3 relative">
        <LottieAnimation animation={HeroAnimation} />
        <HeroBubble
          text="Meilleure satisfaction client"
          direction="-rotate-[20deg]"
          position="-top-3"
          delay="delay-0"
        />
        <HeroBubble
          text="Conversion de nouveaux clients"
          direction="-rotate-12"
          position="left-14 lg:left-44 lg:-bottom-24"
          delay="delay-1000"
        />
        <HeroBubble
          text="Plus de visibilité"
          direction="rotate-[31deg]"
          position="right-0 top-0 lg:-right-5 lg:-top-2"
          delay="delay-700"
        />
      </div>
    </section>
  );
}
