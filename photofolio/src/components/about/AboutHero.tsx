/**
 * Hero banner for the About page. Mirrors the source `section.hero-fullscreen-image`:
 * a full-bleed background image, overlay, and centered `.contents-box` with the
 * animated title + subtitle.
 */
export function AboutHero() {
  return (
    <section className="hero-fullscreen-image">
      <img
        src="/images/backgrounds/about-me-herobg.png"
        alt="Alex Morgan Photography"
        className="hero-bg-image"
      />
      <div className="hero-overlay" />
      <div className="hero-content-wrapper">
        <div className="contents-box">
          <h1 className="animated-title" data-aos="fade-up">
            About Me
          </h1>
          <p
            className="hero-page-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Visual Storyteller &amp; Professional Photographer
          </p>
        </div>
      </div>
    </section>
  );
}
