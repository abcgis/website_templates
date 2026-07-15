import Link from "next/link";

/**
 * Closing call-to-action: heading, supporting line, and two buttons linking to
 * the portfolio and contact pages.
 */
export function AboutCta() {
  return (
    <section className="about-cta mt-9" data-aos="fade-up">
      <h2>Let&apos;s Create Something Beautiful</h2>
      <p>
        Ready to capture your special moments? I&apos;d love to hear about your
        vision.
      </p>
      <div className="cta-buttons">
        <Link href="/portfolio" className="btn btn-primary">
          View Portfolio
        </Link>
        <Link href="/contact-me" className="btn btn-outline">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
