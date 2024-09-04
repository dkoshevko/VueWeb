import Image from 'next/image'
import React from 'react'

type TeamMemberCardProps = {
  photo: string;
  fullName: string;
  jobPosition: string;
}

export default function TeamMemberCard({photo, fullName, jobPosition}: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 bg-white dark:bg-gray-700 border-2 border-black dark:border-white rounded-full relative overflow-hidden">
        <Image src={photo} alt={fullName} width={300} height={300} className="object-cover object-top rounded-full" />
      </div>
      <h4 className="text-lg font-semibold mt-2">{fullName}</h4>
      <h5>{jobPosition}</h5>
    </div>
  )
}
