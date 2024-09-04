import Image from 'next/image'
import React from 'react'


export default function Logo() {
  return (
    <Image src='/logos/logo.svg' alt='Logo VueWeb' width={150} height={100} className="dark:invert" />
  )
}
