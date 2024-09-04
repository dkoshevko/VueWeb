import React from "react";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-primary dark:bg-gradient-dark flex flex-col items-center py-16">
      <h2 className="container uppercase text-center text-3xl tracking-wide font-semibold mb-10">Parlez-nous de votre projet</h2>
      <div className="container flex justify-center">
        <ContactForm customClass="grid w-full lg:w-1/2 space-y-3" />
      </div>
    </section>
  );
}
