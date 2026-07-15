import Link from "next/link";

/**
 * Closing call-to-action for the services page with primary (Contact Us) and
 * outline (View Portfolio) buttons.
 */
export function ServicesCta() {
  return (
    <section className="services-cta" data-aos="fade-up">
      <h2>Ready to Book Your Session?</h2>
      <p>
        Let&apos;s create something beautiful together. Get in touch to discuss your
        photography needs.
      </p>
      <div className="cta-buttons">
        <Link href="/contact-me" className="btn btn-primary">
          Contact Us
        </Link>
        <Link href="/portfolio" className="btn btn-outline">
          View Portfolio
        </Link>
      </div>
    </section>
  );
}
