import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Logo() {
  return (
    <Link href="/">
      <Image src='/logos/logo.svg' alt='Logo VueWeb' width={150} height={100} className="dark:invert" />
    </Link>
  )
}
