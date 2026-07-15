"use client";

import {
  EnvelopeIcon,
  TelephoneIcon,
  MapMarkerIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  PinterestIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const SOCIAL_LINKS: { label: string; Icon: IconComponent }[] = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Twitter", Icon: TwitterXIcon },
  { label: "Pinterest", Icon: PinterestIcon },
];

/**
 * Contact info aside: three detail cards (email / call / visit), a social
 * block, and business hours. Social links are non-functional in the source
 * (`javascript:void(0)`), so they use `href="#"` with preventDefault.
 */
export function ContactInfo() {
  return (
    <aside
      className="contact-info-section"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Contact Details */}
      <div className="contact-info-card">
        <div className="info-icon">
          <EnvelopeIcon />
        </div>
        <div className="info-content">
          <h4>Email Us</h4>
          <p>
            <a href="mailto:hello@photofolio.com">hello@photofolio.com</a>
          </p>
          <p>
            <a href="mailto:bookings@photofolio.com">bookings@photofolio.com</a>
          </p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="info-icon">
          <TelephoneIcon />
        </div>
        <div className="info-content">
          <h4>Call Us</h4>
          <p>
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </p>
          <p>Mon - Fri: 9AM - 6PM EST</p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="info-icon">
          <MapMarkerIcon />
        </div>
        <div className="info-content">
          <h4>Visit Studio</h4>
          <p>123 Photography Lane</p>
          <p>New York, NY 10001</p>
          <p>By appointment only</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="contact-social">
        <h4>Follow Us</h4>
        <div className="social-links">
          {SOCIAL_LINKS.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              onClick={(e) => e.preventDefault()}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="contact-hours">
        <h4>Business Hours</h4>
        <div className="hours-list">
          <div className="hours-item">
            <span>Monday - Friday</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="hours-item">
            <span>Saturday</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="hours-item">
            <span>Sunday</span>
            <span>By Appointment</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
