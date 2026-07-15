const ITEMS: { src: string; alt: string; label: string; delay: string }[] = [
  { src: "/images/oliver/portrait.png", alt: "Description of photo 1", label: "Portrait", delay: "100" },
  { src: "/images/oliver/wedding.png", alt: "Description of photo 2", label: "Wedding", delay: "200" },
  { src: "/images/oliver/scenery.png", alt: "Description of photo 3", label: "Scenery", delay: "300" },
  { src: "/images/oliver/reportage.png", alt: "Description of photo 4", label: "Reportage", delay: "400" },
  { src: "/images/oliver/studio.png", alt: "Description of photo 5", label: "Studio", delay: "500" },
  { src: "/images/oliver/architecture.png", alt: "Description of photo 6", label: "Architecture", delay: "600" },
];

export function PortfolioGallery() {
  return (
    <section className="portfolio-section">
      <h2 className="section-title" data-aos="fade-down">
        Portfolio
      </h2>
      <div className="gallery-grid">
        {ITEMS.map((item) => (
          <a
            key={item.label}
            href="#"
            className="gallery-item"
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <img src={item.src} alt={item.alt} />
            <div className="overlay">
              <span>{item.label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
