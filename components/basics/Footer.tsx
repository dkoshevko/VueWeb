import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex container justify-between lg:justify-evenly gap-4 py-12">
        <div className="flex flex-col justify-between">
          <Logo />
          <nav className="text-sm">
            <ul className="space-y-1">
              <li>
                <Link href="mailto:contact@vueweb.fr">contact@vueweb.fr</Link>
              </li>
              <li>
                <Link href="tel:+33778807466">07.78.80.74.66</Link>
              </li>
              <li className="flex gap-3">
                <Link href="https://www.linkedin.com/company/vueweb" target="blank">
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={35}
                    height={35}
                  />
                </Link>
                <Link href="https://www.instagram.com/vueweb.fr/" target="blank">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <p className="uppercase text-lg border-b-2 border-black pb-1 mb-5 dark:border-white">
            Navigation
          </p>
          <div className="flex flex-col">
            <Navigation customClass="uppercase" />
            <Link href="/mentions-legales" className="uppercase">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="uppercase">
              Politique de confidentialité
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col w-2/5">
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
        </div> */}
    </footer>
  );
}
