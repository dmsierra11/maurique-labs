import { Mail } from "lucide-react";

interface HeroProps {
  language: "en" | "es";
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      h1: "Innovation you can feel.",
      subheadline:
        "Maurique Labs is an innovation studio empowering people to build meaningful products through AI, creativity, and community. Based in Barcelona. Connected to the world.",
      ctaPrimary: "Let's Collaborate",
      caption: "Systems with Soul — since 2025",
    },
    es: {
      h1: "Innovación que se siente.",
      subheadline:
        "Maurique Labs es un estudio de innovación que empodera a personas para construir productos significativos con IA, creatividad y comunidad. Basado en Barcelona. Conectado al mundo.",
      ctaPrimary: "Colaboremos",
      caption: "Sistemas con Alma — desde 2025",
    },
  };

  const copy = content[language];

  return (
    <section
      id="home"
      className="section min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent2 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <h1 className="animate-slide-up mb-6">{copy.h1}</h1>

        <p
          className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          {copy.subheadline}
        </p>

        {/* CTA Button */}
        <div
          className="flex justify-center mb-8 animate-slide-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <a href="mailto:hello@mauriquelabs.com" className="btn-primary">
            <Mail className="w-4 h-4 inline-block mr-2" />
            {copy.ctaPrimary}
          </a>
        </div>

        {/* Caption */}
        <p
          className="text-sm text-foreground/50 animate-slide-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          {copy.caption}
        </p>
      </div>
    </section>
  );
}
