import { FacebookIcon, InstagramIcon, TelegramIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="main-footer">
      <p>&copy; 2026. All rights reserved.</p>
      <div className="social-links">
        <a href="#" aria-label="Instagram" rel="noopener">
          <InstagramIcon />
        </a>
        <a href="#" aria-label="Facebook" rel="noopener">
          <FacebookIcon />
        </a>
        <a href="#" aria-label="Telegram" rel="noopener">
          <TelegramIcon />
        </a>
      </div>
    </footer>
  );
}
