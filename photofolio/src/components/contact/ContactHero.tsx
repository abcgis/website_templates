/**
 * Hero banner for the Contact page. Mirrors the source `section.hero-page`:
 * `.contents-box` with the animated title + subtitle, and a `.vignette` overlay.
 */
export function ContactHero() {
  return (
    <section className="hero-page">
      <div className="contents-box">
        <h1 className="animated-title" data-aos="fade-up">
          Get In Touch
        </h1>
        <p
          className="hero-page-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let&apos;s create something beautiful together. We&apos;re here to
          answer your questions and bring your vision to life.
        </p>
      </div>
      <div className="vignette" />
    </section>
  );
}
