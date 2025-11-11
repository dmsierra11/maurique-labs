import { Linkedin, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  language: "en" | "es";
}

export default function Footer({ language }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Credits */}
          <p className="text-foreground/60 text-sm">
            Bejaus Café · Bejaus Sessions · Maurique Labs
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mauriqueLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent text-foreground/60 hover:text-accent transition-all duration-300 hover:bg-accent/10"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/maurique-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent text-foreground/60 hover:text-accent transition-all duration-300 hover:bg-accent/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@bejaussessions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent text-foreground/60 hover:text-accent transition-all duration-300 hover:bg-accent/10"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-foreground/50 text-xs text-center">
            © {year} Maurique Labs. Systems with Soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
