import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-section">
      <h2 className="hero-title" data-aos="fade-down">
        Art in Every Frame
      </h2>
      <p
        className="hero-subtitle"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Your emotions - my story.
      </p>
      <Link
        href="/portfolio"
        className="btn"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        View Work
      </Link>
    </section>
  );
}
