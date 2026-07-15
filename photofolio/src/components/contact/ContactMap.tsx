/**
 * Contact map section. Embeds the Amap iframe from the source verbatim
 * (kept as-is for fidelity). AOS fade-up on the section.
 */
export function ContactMap() {
  return (
    <section className="contact-map" data-aos="fade-up">
      <h3 className="map-title">Find Us Here</h3>
      <div className="map-container">
        <iframe
          src="https://www.amap.com/"
          sandbox=""
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
