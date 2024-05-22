import Image from 'next/image'
import React from 'react'

type LogoProps = {
  imageStyle?: string
}

export default function Logo({imageStyle}: LogoProps) {
  return (
    <Image src='/logos/logo.svg' alt='Logo VueWeb' width={150} height={100} className={imageStyle} />
  )
}
