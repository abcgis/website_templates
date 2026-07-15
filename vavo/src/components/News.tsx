"use client";

import Link from "next/link";

const NEWS = [
  {
    img: "/img/news/1.jpg",
    title: "What is the Difference between Web and Brand Design",
    author: "Dona Covret",
    date: "05 January, 2022",
  },
  {
    img: "/img/news/2.jpg",
    title: "What is the Difference between Web and Brand Design",
    author: "Alex Smith",
    date: "01 January, 2022",
  },
];

const DELAYS = [undefined, "0.2s"];

const stop = (e: React.MouseEvent) => e.preventDefault();

/** News list (2 items). Clicking an item navigates to /news-single. */
export function News() {
  return (
    <div className="vavo_tm_news" id="news">
      <div className="container full">
        <div className="vavo_tm_title_holder">
          <p>News</p>
          <h3 className="wow" data-splitting>
            Latest News
          </h3>
        </div>
        <div className="news_inner">
          <ul>
            {NEWS.map((n, i) => (
              <li
                key={i}
                className="wow fadeInLeft"
                data-wow-duration="0.8s"
                data-wow-delay={DELAYS[i]}
              >
                <div className="list_inner">
                  <div className="image">
                    <img src="/img/portfolio/4-3.jpg" alt="" />
                    <div
                      className="main"
                      style={{ backgroundImage: `url(${n.img})` }}
                    />
                    <Link className="full_link" href="/news-single" />
                  </div>
                  <div className="details">
                    <h3 className="title">
                      <Link href="/news-single">{n.title}</Link>
                    </h3>
                    <div className="short_info">
                      <p>
                        <span className="author">
                          By <a href="#" onClick={stop}>{n.author}</a>
                        </span>
                        <span className="date">{n.date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
