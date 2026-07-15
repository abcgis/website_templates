import type { SVGProps } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";

// The Oliver template uses Font Awesome 6.5.2 (loaded via CDN in the original).
// We self-host the exact FA6 SVGs via react-icons instead. Each wrapper forwards
// SVG props (className, etc.) so the template's original CSS (which targets these
// icons' inherited color/font-size) keeps working.

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return <FaInstagram aria-hidden {...props} />;
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return <FaFacebookF aria-hidden {...props} />;
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return <FaTelegram aria-hidden {...props} />;
}

export function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
  return <FaEnvelope aria-hidden {...props} />;
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return <FaPhone aria-hidden {...props} />;
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return <FaCircleCheck aria-hidden {...props} />;
}

export function TimesCircleIcon(props: SVGProps<SVGSVGElement>) {
  return <FaCircleXmark aria-hidden {...props} />;
}
