const ABOUT_PARAGRAPHS: { text: string; delay: string }[] = [
  {
    text: "Hello! My name is Oliver Williams, and I'm a professional photographer with 10 years of experience. My passion is capturing your genuine emotions and creating authentic stories.",
    delay: "400",
  },
  {
    text: "I believe the best photograph isn't just a beautiful shot, but a captured moment filled with meaning. I specialize in wedding, portrait, and family photography and always strive to make each session unique and a true reflection of my clients' personalities.",
    delay: "600",
  },
  {
    text: "In my work, I use natural light and minimal editing to preserve the atmosphere and authenticity. Let's create your story together!",
    delay: "800",
  },
];

export function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="section-title" data-aos="fade-down">
        About Me
      </h2>
      <div className="about-container">
        <div
          className="about-photo"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <img src="/images/oliver/foto.png" alt="A photo of the photographer" />
        </div>
        <div className="about-text" data-aos="fade-left" data-aos-delay="200">
          <h3>Oliver Williams</h3>
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p key={i} data-aos="fade-left" data-aos-delay={p.delay}>
              {p.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
