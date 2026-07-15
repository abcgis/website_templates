/**
 * Portfolio page hero.
 *
 * `<section class="hero-page">` with a `.contents-box` holding the animated
 * title + subtitle, followed by a `.vignette`. The gradient background is
 * applied via `photofolio.css` (no image), so this component only renders the
 * markup with the original AOS data attributes.
 */
export function PortfolioHero() {
  return (
    <section className="hero-page">
      <div className="contents-box">
        <h1 className="animated-title" data-aos="fade-up">
          Portfolio
        </h1>
        <p className="hero-page-subtitle" data-aos="fade-up" data-aos-delay="200">
          A curated collection of my finest work
        </p>
      </div>
      <div className="vignette"></div>
    </section>
  );
}
