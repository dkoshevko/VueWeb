import React from "react";
import { ModeToggle } from "./ModeToggle";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex container justify-between items-center">
      <Logo />
      <div className="flex gap-5">
        <Navigation />
        <ModeToggle />
      </div>
    </header>
  );
}
