import Link from "next/link";

/**
 * Frequently Asked Questions section. Static (no accordion) to match the
 * source markup. The "Services page" reference is an internal link.
 */
export function ContactFaq() {
  return (
    <section className="contact-faq" data-aos="fade-up">
      <h3 className="section-title">Frequently Asked Questions</h3>
      <div className="faq-grid">
        <div className="faq-item">
          <h4>How far in advance should I book?</h4>
          <p>
            We recommend booking 3-6 months in advance for weddings and major
            events. For portraits and other sessions, 2-4 weeks notice is ideal.
          </p>
        </div>
        <div className="faq-item">
          <h4>What&apos;s your pricing structure?</h4>
          <p>
            Our pricing varies based on the type of photography, duration, and
            deliverables. Check our{" "}
            <Link href="/services">Services page</Link> for detailed pricing
            information.
          </p>
        </div>
        <div className="faq-item">
          <h4>Do you travel for shoots?</h4>
          <p>
            Yes! We&apos;re available for destination shoots. Travel fees apply
            for locations outside our local area. Contact us for a custom quote.
          </p>
        </div>
        <div className="faq-item">
          <h4>What&apos;s included in the packages?</h4>
          <p>
            All packages include professional editing, high-resolution digital
            files, and an online gallery. Print options and albums are available
            as add-ons.
          </p>
        </div>
      </div>
    </section>
  );
}
