import { Linkedin, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  language: "en" | "es";
}

export default function Footer({ language }: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightText = `© ${year} Maurique Labs · Systems with Soul`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-4">
              <span className="text-accent">Maurique</span> Labs
            </div>
            <p className="text-foreground/60 text-sm">
              Innovation studio in Barcelona, building AI-powered products and cultural experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a
                  href="#what-we-do"
                  className="hover:text-accent transition-colors"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  className="hover:text-accent transition-colors"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#collaborate"
                  className="hover:text-accent transition-colors"
                >
                  Collaborate
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
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
                href="https://www.instagram.com/mauriqueLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent text-foreground/60 hover:text-accent transition-all duration-300 hover:bg-accent/10"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@mauriqueLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent text-foreground/60 hover:text-accent transition-all duration-300 hover:bg-accent/10"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <p>{copyrightText}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
