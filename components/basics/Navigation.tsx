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
          <Link href={""}>Nos services</Link>
        </li>
        <li>
          <Link href={""}>Équipe</Link>
        </li>
        <li>
          <Link href={""}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
