"use client"
import Image from "next/image";

type TeamMemberCardProps = {
  photo: string;
  fullName: string;
  jobPosition: string;
}

export default function TeamMemberCard({photo, fullName, jobPosition}: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-full relative overflow-hidden">
        <Image 
          src={photo} 
          alt={fullName} 
          width={300} 
          height={300} 
          className="object-cover object-top rounded-full" 
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold mt-2">{fullName}</h3>
      <h4>{jobPosition}</h4>
    </div>
  )
}
