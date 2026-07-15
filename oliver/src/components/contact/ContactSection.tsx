"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  InstagramIcon,
  PhoneIcon,
  TimesCircleIcon,
} from "@/components/icons";

type ToastType = "success" | "error";

const CONTACT_NOTE =
  "I'll be happy to answer your questions and discuss the details of your photoshoot.";

/**
 * Contact section. Mirrors main.js form logic:
 *  - submit -> preventDefault, button gains .loading (spinner) for 2s
 *  - 80% success (Math.random() > 0.2) -> success toast + form.reset()
 *  - 20% failure -> error toast
 *  - toast slides in, stays 5s, slides out (0.6s CSS transition), then hides
 */
export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastType | null>(null);
  const [active, setActive] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  const showToast = useCallback((type: ToastType) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setToast(type);
    // Slide in on the next frame (mirrors main.js removing .hidden then adding .active).
    requestAnimationFrame(() => setActive(true));
    // After 5s slide out; after the 600ms CSS transition, hide entirely.
    timers.current.push(
      setTimeout(() => setActive(false), 5000),
      setTimeout(() => {
        setToast(null);
        setActive(false);
      }, 5600),
    );
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const isSuccess = Math.random() > 0.2;
      showToast(isSuccess ? "success" : "error");
      if (isSuccess) form.reset();
    }, 2000);
  };

  const toastClass = (type: ToastType) => {
    if (toast !== type) return "hidden";
    return active ? "active" : "";
  };

  return (
    <section className="contact-section">
      <h2 className="section-title" data-aos="fade-down">
        Contact
      </h2>
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
          <h3>Get in Touch</h3>
          <p data-aos="fade-right" data-aos-delay="400">
            {CONTACT_NOTE}
          </p>
          <ul data-aos="fade-right" data-aos-delay="600">
            <li>
              <EnvelopeIcon />{" "}
              <a href="mailto:your_email@example.com">your_email@example.com</a>
            </li>
            <li>
              <PhoneIcon /> <a href="tel:+71234567890">+907 (123) 456-78-90</a>
            </li>
            <li>
              <InstagramIcon /> <a href="#">@your_instagram</a>
            </li>
          </ul>
        </div>

        <div
          className="contact-form-container"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button
              type="submit"
              className={`btn${loading ? " loading" : ""}`}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <span className="btn-text">Send</span>
              <div className="loader-ring" />
            </button>
          </form>
        </div>
      </div>

      <div className={`toast success-toast ${toastClass("success")}`}>
        <CheckCircleIcon />
        <p>Message sent successfully!</p>
      </div>
      <div className={`toast error-toast ${toastClass("error")}`}>
        <TimesCircleIcon />
        <p>An error occurred, please try again.</p>
      </div>
    </section>
  );
}
