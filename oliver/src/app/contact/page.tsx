import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me to book a photoshoot. Phone, email, social media.",
};

export default function ContactPage() {
  return <ContactSection />;
}
