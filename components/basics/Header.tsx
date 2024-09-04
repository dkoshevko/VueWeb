import React from "react";
import { ModeToggle } from "./ModeToggle";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex container justify-center lg:justify-between items-center py-2 absolute top-0 left-1/2 -translate-x-1/2">
      <Logo />
      <div className="hidden lg:flex gap-5">
        <Navigation customClass="uppercase text-2xl font-light flex gap-10 items-center" />
        <ModeToggle />
      </div>
    </header>
  );
}
