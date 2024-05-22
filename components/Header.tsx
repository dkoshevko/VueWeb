import React from "react";
import { ModeToggle } from "./ModeToggle";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex container justify-between items-center py-2">
      <Logo imageStyle="dark:invert" />
      <div className="flex gap-5">
        <Navigation customClass="uppercase text-2xl font-light flex gap-10 items-center" />
        <ModeToggle />
      </div>
    </header>
  );
}
