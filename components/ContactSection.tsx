import React from "react";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="gradient-bg flex flex-col items-center py-16">
      <h2 className="uppercase text-3xl font-semibold mb-10">Contactez-nous</h2>
      <div className="container">
        <ContactForm customClass="grid grid-cols-2 gap-x-10 gap-y-4" />
      </div>
    </section>
  );
}
