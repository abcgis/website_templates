/**
 * Hero (#home): name + job intro, "My Works" / "Let's Talk" buttons, and a
 * scroll-down indicator. The name/job reveal via `.loaded` (VavoEffects);
 * `wow`/`data-splitting` attributes preserved for structural fidelity.
 * Anchor buttons (#portfolio / #contact) smooth-scroll via CSS.
 */
export function Hero() {
  return (
    <div className="arlo_fn_hero_header" id="home">
      <div className="container full">
        <div className="hero_inner">
          <div className="hero_details">
            <div className="texts">
              <p className="name wow txt" data-splitting>
                Hi, My name is <label>Serena</label>
              </p>
              <p className="job wow txt" data-splitting>
                I&apos;m Serena, Italian Wedding and Lifestyle photographer based in
                Barcelona, Spain. I love exploring the world and photographing
                people!
              </p>
            </div>
            <div className="buttons">
              <div className="vavo_tm_button">
                <a href="#portfolio">
                  <span>My Works</span>
                </a>
              </div>
              <div className="lets_talk">
                <a href="#contact">Let&apos;s Talk</a>
              </div>
            </div>
          </div>
          <div className="vavo_tm_down" data-skin="dark">
            <div className="line_wrapper">
              <div className="line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
