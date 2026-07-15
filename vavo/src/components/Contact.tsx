"use client";

import { useState } from "react";

/**
 * Contact form (init.js vavo_tm_contact_form): validates name/email/message;
 * shows `.empty_notice` if any are blank, otherwise shows a success message
 * and resets. No backend (original POSTs to modal/contact.php).
 */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "empty" | "success">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("empty");
      window.setTimeout(() => setStatus("idle"), 2000);
      return;
    }
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="vavo_tm_contact" id="contact">
      <div className="container full">
        <div className="contact_inner">
          <div className="vavo_tm_title_holder">
            <p>Contact</p>
            <h3 className="wow" data-splitting>
              Get in Touch
            </h3>
          </div>
          <div className="wrapper">
            <div className="fields wow fadeInLeft" data-wow-duration="0.8s">
              <form
                className="contact_form"
                id="contact_form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                  style={{ display: status === "success" ? "block" : "none" }}
                >
                  {status === "success" && (
                    <span className="contact_success">
                      Your message has been received, We will contact you soon.
                    </span>
                  )}
                </div>
                <div
                  className="empty_notice"
                  style={{ display: status === "empty" ? "block" : "none" }}
                >
                  <span>Please Fill Required Fields</span>
                </div>
                <div className="first">
                  <ul>
                    <li>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </li>
                    <li>
                      <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="vavo_tm_button">
                  <a id="send_message" href="#" onClick={send}>
                    <span>Send Message</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
