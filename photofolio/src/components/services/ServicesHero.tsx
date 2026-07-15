/**
 * Services page hero. Replicates `<section class="hero-page">` from the source
 * HTML: animated title, subtitle, and vignette overlay.
 */
export function ServicesHero() {
  return (
    <section className="hero-page">
      <div className="contents-box">
        <h1 className="animated-title" data-aos="fade-up">
          Our Services
        </h1>
        <p
          className="hero-page-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Professional photography services tailored to capture your special
          moments
        </p>
      </div>
      <div className="vignette" />
    </section>
  );
}
