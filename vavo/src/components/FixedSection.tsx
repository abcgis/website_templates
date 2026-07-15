/**
 * Fixed hero background section. The hero image (img/about/1.jpg) stays fixed
 * while the main content scrolls over it; `.my_overlay` slides away once
 * `.loaded` is added (by VavoEffects). `data-hero-type="image"` shows the
 * image (video variant hidden via CSS).
 */
export function FixedSection() {
  return (
    <div className="vavo_tm_fixed_section" data-hero-type="image">
      <div
        className="hero_image"
        style={{ backgroundImage: "url(/img/about/1.jpg)" }}
      />
      <div className="hero_video">
        {/* No real video source in the original (placeholder); omit <source>
            to avoid passing an empty src. Hidden via CSS (data-hero-type=image). */}
        <video loop muted autoPlay />
      </div>
      <div className="my_overlay" />
    </div>
  );
}
