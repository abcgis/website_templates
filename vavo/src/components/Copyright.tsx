"use client";

const stop = (e: React.MouseEvent) => e.preventDefault();

const SOCIAL = [
  "xcon-facebook",
  "xcon-twitter",
  "xcon-linkedin",
  "xcon-behance",
];

/** Footer copyright: address, email/phone, social links (xcon icon font). */
export function Copyright() {
  return (
    <div className="vavo_tm_copyright">
      <div className="container full">
        <div className="copyright_inner">
          <ul>
            <li className="wow fadeInLeft" data-wow-duration="0.8s">
              <span>Brook 103,</span>
              <span>90021 New York, USA</span>
            </li>
            <li
              className="wow fadeInLeft"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <span>
                <a href="#" onClick={stop}>
                  example@gmail.com
                </a>
              </span>
              <span>+77 033 442 55 57</span>
            </li>
            <li
              className="wow fadeInLeft"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <div className="social">
                <ul>
                  {SOCIAL.map((ic) => (
                    <li key={ic}>
                      <a href="#" onClick={stop}>
                        <span className="first">
                          <i className={ic} />
                        </span>
                        <span className="second">
                          <i className={ic} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
