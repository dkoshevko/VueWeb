import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <nav className='uppercase text-2xl font-light flex gap-10 items-center'>
      <Link href={''}>Nos services</Link>
      <Link href={''}>Équipe</Link>
      <Link href={''}>Contact</Link>
    </nav>
  )
}
