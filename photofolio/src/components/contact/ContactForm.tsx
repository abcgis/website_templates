"use client";

import { useRef, useState, type FormEvent } from "react";
import { SendIcon } from "@/components/icons";

type SubmitStatus = "idle" | "sending" | "success";

/**
 * Contact form. Mirrors the source `form#contactForm` markup exactly.
 * Behavior (matching contact-form-demo.js intent, demo only - no backend):
 *  - onSubmit preventDefault
 *  - native HTML validation drives required fields (browser-native)
 *  - simulate a short async send, then reset the form and show a success
 *    message below the form actions
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission delay (1-2s, like the source demo).
    setTimeout(() => {
      formRef.current?.reset();
      setStatus("success");
    }, 1500);
  };

  const submitting = status === "sending";

  return (
    <section className="contact-form-section" data-aos="fade-up">
      <div className="form-header">
        <h3 className="form-title">Send us a Message</h3>
        <p className="form-description">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <form
        className="contact-form"
        id="contactForm"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Interested In *</label>
          <select id="service" name="service" required>
            <option value="">Select a service...</option>
            <option value="wedding">Wedding Photography</option>
            <option value="portrait">Portrait Photography</option>
            <option value="event">Event Photography</option>
            <option value="commercial">Commercial Photography</option>
            <option value="family">Family Photography</option>
            <option value="landscape">Landscape &amp; Travel</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="eventDate">Event Date (if applicable)</label>
          <input type="date" id="eventDate" name="eventDate" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell us about your project, vision, or any questions you have..."
          />
        </div>

        <div className="form-group form-checkbox">
          <input type="checkbox" id="newsletter" name="newsletter" />
          <label htmlFor="newsletter">
            I&apos;d like to receive photography tips and special offers
          </label>
        </div>

        {status === "success" && (
          <p className="form-success" role="status">
            Thank you! Your message has been sent.
          </p>
        )}

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          <span>{submitting ? "Sending..." : "Send Message"}</span>
          <SendIcon />
        </button>
      </form>
    </section>
  );
}
