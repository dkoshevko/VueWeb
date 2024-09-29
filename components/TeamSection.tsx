import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  return (
    <section id="team" className="bg-gradient-primary dark:bg-gradient-dark flex flex-col items-center py-16">
      <h2 className="uppercase text-3xl font-semibold mb-10">Notre équipe</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-32">
        <TeamMemberCard
          photo="/photos/dk-light.png"
          fullName="Denys"
          jobPosition="CEO - Développeur"
        />
        <TeamMemberCard
          photo="/photos/rp-light.png"
          fullName="Rostyslav"
          jobPosition="Directeur des Opérations"
        />
        <TeamMemberCard
          photo="/photos/aa-light.png"
          fullName="Artur"
          jobPosition="Conseiller"
        />
        {/* <TeamMemberCard
          photo="/photos/superhero.png"
          fullName="Romain"
          jobPosition="Conseiller"
        /> */}
      </div>
    </section>
  );
}
