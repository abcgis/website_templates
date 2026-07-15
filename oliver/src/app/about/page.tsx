import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "A photographer's biography and philosophy. Learn more about my creative journey.",
};

export default function AboutPage() {
  return <AboutSection />;
}
