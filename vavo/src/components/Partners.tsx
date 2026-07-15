"use client";

const PARTNERS = [1, 2, 3, 4, 5, 1];
const DELAYS = [undefined, "0.2s", "0.4s", undefined, "0.2s", "0.4s"];

/**
 * Partners strip (6 logos). Hover adds `.active` to the hovered item and
 * removes it from siblings (init.js arlo_partner_hover_effect).
 */
export function Partners() {
  const onEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    document
      .querySelectorAll(".vavo_tm_partners li")
      .forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };
  const onLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.classList.remove("active");
  };

  return (
    <div className="vavo_tm_partners">
      <div className="container full">
        <div className="partners_inner">
          <ul>
            {PARTNERS.map((p, i) => (
              <li
                key={`${p}-${i}`}
                className="wow fadeInLeft"
                data-wow-duration="0.8s"
                data-wow-delay={DELAYS[i]}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <div className="list_inner">
                  <img src={`/img/partners/${p}.png`} alt="" />
                  <div className="my_text">
                    <span className="wow my_effect" data-splitting>
                      climbing.com
                    </span>
                  </div>
                  <a
                    className="full_link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
