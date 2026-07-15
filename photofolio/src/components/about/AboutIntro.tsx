/**
 * Introduction section. Two-column grid: presentation image (left) and a short
 * biography (right). Text is verbatim from the source HTML.
 */
export function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 align-items-center">
        <div className="intro-image" data-aos="fade-right">
          <img
            src="/images/backgrounds/about-me-presentation.png"
            alt="Alex Morgan - Professional Photographer"
          />
        </div>

        <div className="intro-content" data-aos="fade-up">
          <h2 className="intro-title">Hi, I&apos;m Alex Morgan</h2>
          <p className="intro-text">
            Photography is more than just a profession for me-it&apos;s my way of
            seeing and sharing the beauty of the world. With over a decade of
            experience behind the lens, I&apos;ve had the privilege of capturing
            countless stories, emotions, and unforgettable moments.
          </p>
          <p className="intro-text">
            My journey began when I received my first camera as a gift at age 16.
            What started as a hobby quickly grew into an obsession, and
            eventually, a career. Today, I specialize in wedding, portrait, and
            lifestyle photography.
          </p>
          <p className="intro-text">
            Every session is an opportunity to create something unique and
            meaningful. I believe in building genuine connections with my
            clients, understanding their vision, and bringing it to life through
            my lens.
          </p>
        </div>
      </div>
    </section>
  );
}
