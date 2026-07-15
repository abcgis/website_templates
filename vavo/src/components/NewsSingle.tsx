"use client";

const PARA_1 =
  "As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.";

const BLOCKQUOTE =
  "As Vintage decided to have a closer look into fast-paced New York web design realm in person. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.";

const PARA_2 =
  "As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.";

const PARA_3 =
  "As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. We encounter professionals with careers to covet and lives to write books about. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.";

const TAGS = ["Design", "Branding", "Media", "Photography"];

const stop = (e: React.MouseEvent) => e.preventDefault();
const stopForm = (e: React.FormEvent) => e.preventDefault();

/** News article detail page (blog single + comments), cloned from news-single.html. */
export function NewsSingle() {
  return (
    <div className="vavo_tm_blog_single">
      <div className="container full">
        <div className="mobile_hero_image">
          <img src="/img/slider/1920x1080.jpg" alt="" />
          <div
            className="main"
            style={{ backgroundImage: "url(/img/slider/3.jpg)" }}
          />
        </div>

        <div className="short_info">
          <ul>
            <li>
              <div className="list_inner">
                <img className="svg" src="/img/svg/calendar.svg" alt="" />
                <span>01 January, 2022</span>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img className="svg" src="/img/svg/avatar.svg" alt="" />
                <span>
                  <a href="#" onClick={stop}>
                    Alan Walker
                  </a>
                </span>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img className="svg" src="/img/svg/comment.svg" alt="" />
                <span>
                  <a href="#" onClick={stop}>
                    1 Comment
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="title">
          <h3>What is development and branding</h3>
        </div>

        <div className="main_infos">
          <p>{PARA_1}</p>
          <blockquote>{BLOCKQUOTE}</blockquote>
          <p>{PARA_2}</p>
          <div className="info_images">
            <ul>
              <li>
                <div className="image">
                  <img src="/img/news/1000x700.jpg" alt="" />
                  <div
                    className="main"
                    style={{ backgroundImage: "url(/img/slider/6.jpg)" }}
                  />
                </div>
              </li>
              <li>
                <div className="image">
                  <img src="/img/news/1000x700.jpg" alt="" />
                  <div
                    className="main"
                    style={{ backgroundImage: "url(/img/slider/5.jpg)" }}
                  />
                </div>
              </li>
            </ul>
          </div>
          <p>{PARA_3}</p>
        </div>

        <div className="tags">
          <label>Tags:</label>
          <ul>
            {TAGS.map((t) => (
              <li key={t}>
                <a href="#" onClick={stop}>
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="vavo_tm_commentbox_wrap classic">
          <div className="inner_wrap">
            <div className="desriptions_wrap">
              <div className="title">
                <h3>1 Comment</h3>
              </div>
              <div className="comment_texts">
                <div className="wp">
                  <div
                    className="avatar"
                    style={{ backgroundImage: "url(/img/about/1.jpg)" }}
                  />
                  <h3>
                    <a href="#" onClick={stop}>
                      A WordPress Commenter
                    </a>
                  </h3>
                  <span className="date">February 01, 2019</span>
                  <p className="text">
                    Hi, this is a comment.
                    <br />
                    To get started with moderating, editing, and deleting
                    comments, please visit the Comments screen in the dashboard.
                    Commenter avatars come from{" "}
                    <a href="#" onClick={stop}>
                      Gravatar
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="reply_comment_wrap">
              <div className="title">
                <h3>Leave a Reply</h3>
              </div>
              <div className="input_list_wrap">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  onSubmit={stopForm}
                >
                  <div className="input_row">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="input_row">
                    <input type="text" placeholder="E-mail" />
                  </div>
                  <div className="input_row">
                    <input type="text" placeholder="Website" />
                  </div>
                  <div className="input_row">
                    <textarea placeholder="Comment" />
                  </div>
                  <div className="vavo_tm_button">
                    <a href="#" onClick={stop}>
                      <span>Submit Comment</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
