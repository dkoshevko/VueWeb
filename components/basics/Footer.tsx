import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Navigation from "./Navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer>
      <div className="flex container justify-between py-12">
        <div className="flex flex-col justify-between">
          <Logo imageStyle="dark:invert" />
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
          <h5 className="uppercase text-lg border-b-2 border-black pb-1 mb-5 dark:border-white">
            Navigation
          </h5>
          <Navigation customClass="uppercase" />
          <Link href="" className="uppercase">
            Mentions légales
          </Link>
        </div>
        <div className="flex flex-col w-2/5">
          <h5 className="uppercase text-lg border-b-2 border-black pb-1 mb-5 dark:border-white">
            Newsletter
          </h5>
          <Input
            type="email"
            placeholder="MAIL :"
            className="mb-2 text-black dark:text-white"
          />
          <Button
            type="submit"
            variant="outline"
            className="w-fit uppercase px-10 place-self-end"
          >
            S’abonner
          </Button>
        </div>
      </div>
    </footer>
  );
}
