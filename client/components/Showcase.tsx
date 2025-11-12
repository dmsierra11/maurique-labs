import { useEffect, useState } from "react";
import { Music, Zap, Sparkles } from "lucide-react";

interface ShowcaseProps {
  language: "en" | "es";
}

export default function Showcase({ language }: ShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("showcase");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: [
      {
        title: "Bejaus Sessions",
        description:
          "Live music and creative sessions showcasing emerging artists and the intersection of culture and community.",
        icon: Music,
        link: "https://www.youtube.com/@bejaussessions",
        image:
          "linear-gradient(135deg, rgba(15, 106, 79, 0.3) 0%, rgba(200, 107, 74, 0.3) 100%)",
      },
      {
        title: "Moonamour x Bejaus",
        description:
          "Collaborative experiences bringing together music, visual art, and community storytelling.",
        icon: Zap,
        link: "https://www.youtube.com/channel/UCdil_RtSsa7P9Il6hMU4-eA",
        image:
          "linear-gradient(135deg, rgba(200, 107, 74, 0.2) 0%, rgba(15, 106, 79, 0.2) 100%)",
      },
      {
        title: "Upcoming Collaborations",
        description:
          "Placeholder for future projects blending art, technology, and community.",
        icon: Sparkles,
        link: "#",
        image:
          "linear-gradient(135deg, rgba(15, 106, 79, 0.2) 0%, rgba(200, 107, 74, 0.2) 100%)",
      },
    ],
    es: [
      {
        title: "Bejaus Sessions",
        description:
          "Sesiones de música en vivo y experiencias creativas que muestran artistas emergentes y la intersección de la cultura y comunidad.",
        icon: Music,
        link: "https://www.youtube.com/@bejaussessions",
        image:
          "linear-gradient(135deg, rgba(15, 106, 79, 0.3) 0%, rgba(200, 107, 74, 0.3) 100%)",
      },
      {
        title: "Moonamour x Bejaus",
        description:
          "Experiencias colaborativas que reúnen música, arte visual y narrativa comunitaria.",
        icon: Zap,
        link: "https://www.youtube.com/channel/UCdil_RtSsa7P9Il6hMU4-eA",
        image:
          "linear-gradient(135deg, rgba(200, 107, 74, 0.2) 0%, rgba(15, 106, 79, 0.2) 100%)",
      },
      {
        title: "Colaboraciones Futuras",
        description:
          "Futuro de proyectos que mezclen arte, tecnología y comunidad.",
        icon: Sparkles,
        link: "#",
        image:
          "linear-gradient(135deg, rgba(15, 106, 79, 0.2) 0%, rgba(200, 107, 74, 0.2) 100%)",
      },
    ],
  };

  const items = content[language];
  const sectionTitle = language === "en" ? "Our Work" : "Nuestro Trabajo";

  return (
    <section id="showcase" className="section">
      <div className="section-container">
        <h2
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {sectionTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`card-base card-hover group transition-all duration-700 overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms",
                }}
              >
                {/* Background image/gradient */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{ background: item.image }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent2 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
