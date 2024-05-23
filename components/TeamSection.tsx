import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  return (
    <section id="team" className="gradient-bg flex flex-col items-center py-16">
      <h2 className="uppercase text-3xl mb-10">Notre équipe</h2>
      <div className="flex justify-center gap-32">
        <TeamMemberCard
          photo="/photos/DK.jpg"
          fullName="Denys"
          jobPosition="CEO - Développeur"
        />
        <TeamMemberCard
          photo="/photos/RP.jpg"
          fullName="Rostyslav"
          jobPosition="COO - Développeur"
        />
        <TeamMemberCard
          photo="/photos/AA.jpg"
          fullName="Artur"
          jobPosition="CCO - Commercial"
        />
      </div>
    </section>
  );
}
