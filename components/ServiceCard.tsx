import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="flex flex-col items-center">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="hover:scale-110 transition-all dark:invert"
      />
      <h3 className="text-2xl mt-5 mb-2">{title}</h3>
      <p className="text-justify">{description}</p>
    </article>
  );
}
