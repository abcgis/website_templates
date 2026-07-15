"use client";

import { useState } from "react";

type Kind = "video" | "image";
type Link = "single" | "youtube" | "zoom";

type Item = {
  title: string;
  type: string;
  kind: Kind;
  mainImg?: string;
  zoomImg?: string;
  link: Link;
};

const ITEMS: Item[] = [
  { title: "Solonick Dance", type: "Vimeo", kind: "video", link: "single" },
  {
    title: "Barry Module",
    type: "YouTube",
    kind: "image",
    mainImg: "/img/portfolio/1.jpg",
    link: "youtube",
  },
  {
    title: "Sitting Girl",
    type: "Image",
    kind: "image",
    mainImg: "/img/portfolio/7.jpg",
    zoomImg: "/img/portfolio/7.jpg",
    link: "zoom",
  },
  {
    title: "Bondo Dando",
    type: "YouTube",
    kind: "image",
    mainImg: "/img/portfolio/3.jpg",
    link: "youtube",
  },
  {
    title: "Beauty Girl",
    type: "Image",
    kind: "image",
    mainImg: "/img/portfolio/4.jpg",
    zoomImg: "/img/portfolio/4.jpg",
    link: "zoom",
  },
  { title: "Vodoo Jango", type: "Vimeo", kind: "video", link: "single" },
];

const DELAYS = [undefined, "0.2s", undefined, "0.2s", undefined, "0.2s"];

/**
 * Portfolio grid (6 items). `zoom` items open a simple lightbox (replaces
 * magnificPopup); `youtube` / `single` links have no real destination in the
 * clone (no detail/video pages) so they no-op. The `.main` div carries the
 * real image as a background (init.js vavo_tm_data_images).
 */
export function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="vavo_tm_portfolio" id="portfolio">
      <div className="container full">
        <div className="vavo_tm_title_holder">
          <p>Portfolio</p>
          <h3 className="wow" data-splitting>
            Featured Works
          </h3>
        </div>
        <div className="portfolio_list">
          <ul className="gallery_zoom">
            {ITEMS.map((it, i) => (
              <li
                key={it.title}
                className="wow fadeInLeft"
                data-wow-duration="0.8s"
                data-wow-delay={DELAYS[i]}
              >
                <div className="list_inner">
                  <div className="image">
                    <img src="/img/portfolio/1-1.jpg" alt="" />
                    {it.kind === "video" ? (
                      <div className="video-wrapper">
                        <video loop muted autoPlay />
                      </div>
                    ) : (
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${it.mainImg})`,
                        }}
                      />
                    )}
                    {it.link === "zoom" ? (
                      <a
                        className="full_link zoom"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setLightbox(it.zoomImg!);
                        }}
                      />
                    ) : (
                      <a
                        className={`full_link${it.link === "youtube" ? " popup-youtube" : ""}`}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      />
                    )}
                    <div className="details">
                      <h3 className="title">{it.title}</h3>
                      <span>{it.type}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
          />
        </div>
      )}
    </div>
  );
}
