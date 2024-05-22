import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Navigation from "./Navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";

export default function Footer() {
  

  return (
    <footer className="border-t border-black bg-black dark:bg-white text-white dark:text-black">
      <div className="flex container justify-between py-12">
        <div className="flex flex-col justify-between">
          <Logo imageStyle="invert dark:invert-0" />
          <nav className="text-sm">
            <ul className="space-y-1">
              <li>
                <Link href="mailto:contact@vueweb.fr">contact@vueweb.fr</Link>
              </li>
              <li>
                <Link href="tel:+33123456789">01.23.45.67.89</Link>
              </li>
              <li className="flex gap-3">
                <Link href="">
                  <Image
                    src="/icons/linkedin.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/icons/instagram.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h5 className="uppercase text-lg border-b border-white pb-1 mb-5 dark:border-black">Navigation</h5>
          <Navigation customClass="uppercase" />
          <Link href="" className="uppercase">
            Mentions légales
          </Link>
        </div>
        <div className="flex flex-col w-2/5">
          <h5 className="uppercase text-lg border-b border-white pb-1 mb-5 dark:border-black">Newsletter</h5>
          <Input type="email" placeholder="Email" className="mb-2 text-black dark:text-white placeholder:italic" />
          <Button type="submit" variant="secondary" size="lg" className="w-fit active:scale-95 uppercase">
            S’abonner
          </Button>
        </div>
      </div>
    </footer>
  );
}
