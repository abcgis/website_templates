import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Partners } from "@/components/Partners";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
import { Copyright } from "@/components/Copyright";

export default function Home() {
  return (
    <>
      {/* Mobile-only hero header (hidden on desktop via CSS) */}
      <div className="mobile_hero_header home" data-hero-type="image">
        <img src="/img/slider/1920x1080.jpg" alt="" />
        <div className="main" style={{ backgroundImage: "url(/img/slider/3.jpg)" }} />
        <div className="hero_video">
          <video loop muted autoPlay />
        </div>
      </div>
      <div className="waited" />
      <Hero />
      <Portfolio />
      <Partners />
      <News />
      <Contact />
      <Copyright />
    </>
  );
}
