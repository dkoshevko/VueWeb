import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  return (
    <section id="team" className="gradient-bg flex flex-col items-center py-16">
      <h2 className="uppercase text-3xl font-semibold mb-10">Notre équipe</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-32">
        <TeamMemberCard
          photo="/photos/DK.png"
          fullName="Denys"
          jobPosition="CEO - Développeur"
        />
        <TeamMemberCard
          photo="/photos/RP.png"
          fullName="Rostyslav"
          jobPosition="COO - Développeur"
        />
        <TeamMemberCard
          photo="/photos/AA.png"
          fullName="Artur"
          jobPosition="CCO - Commercial"
        />
      </div>
    </section>
  );
}
