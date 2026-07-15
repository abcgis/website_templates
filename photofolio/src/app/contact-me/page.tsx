import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactFaq } from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Get in touch with us for photography bookings, inquiries, or collaborations. We'd love to hear from you and capture your special moments.",
  keywords: [
    "contact photographer",
    "photography booking",
    "photo inquiry",
    "hire photographer",
  ],
};

/**
 * Contact page (`/contact-me`). Composes the hero (outside the page wrapper)
 * with the intro, form+info grid, map, and FAQ inside `.contact-page > .container`.
 */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="contact-page">
        <div className="container">
          {/* Contact Intro */}
          <section className="contact-intro" data-aos="fade-up">
            <h2 className="section-title">We&apos;d Love to Hear From You</h2>
            <p className="section-description">
              Whether you&apos;re planning a wedding, need professional portraits,
              or have a creative project in mind, we&apos;re excited to discuss
              how we can help capture your special moments.
            </p>
          </section>

          {/* Contact Grid: form + info */}
          <div className="contact-grid">
            <ContactForm />
            <ContactInfo />
          </div>

          <ContactMap />
          <ContactFaq />
        </div>
      </div>
    </>
  );
}
