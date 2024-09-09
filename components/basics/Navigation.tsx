import Link from "next/link";
import React from "react";

  type NavigationProps = {
    customClass: string;
  }

export default function Navigation({customClass}: NavigationProps) {
  return (
    <nav className="flex">
      <ul className={customClass}>
        <li>
          <Link href="/#services">Nos services</Link>
        </li>
        <li>
          <Link href="/#team">Équipe</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
