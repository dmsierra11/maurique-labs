import { useEffect, useState } from "react";

interface WhatWeDoProps {
  language: "en" | "es";
}

export default function WhatWeDo({ language }: WhatWeDoProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("what-we-do");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: [
      {
        title: "Empower Through AI",
        description:
          "We enable non-technical creators to build their own products using AI. Workshops, hackathons, and templates that make innovation accessible.",
      },
      {
        title: "Build Communities Around Culture",
        description:
          "We design events that connect people through tech, art, and music — turning creative energy into collaboration.",
      },
      {
        title: "Create With Purpose",
        description:
          "We only build what we believe in — music, art, small business, sports, and hospitality. Tech that serves creativity.",
      },
    ],
    es: [
      {
        title: "Empoderar con IA",
        description:
          "Permitimos que creadores no técnicos construyan sus propios productos usando IA. Talleres, hackathons y plantillas que hacen la innovación accesible.",
      },
      {
        title: "Construir comunidades alrededor de la cultura",
        description:
          "Diseñamos eventos que conectan a personas a través de la tecnología, el arte y la música — convirtiendo la energía creativa en colaboración.",
      },
      {
        title: "Crear con propósito",
        description:
          "Solo construimos lo que creemos — música, arte, pequeños negocios, deportes y hospitalidad. Tecnología que sirve a la creatividad.",
      },
    ],
  };

  const cards = content[language];

  return (
    <section
      id="what-we-do"
      className="section"
    >
      <div className="section-container">
        <h2 className={`mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-base card-hover transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">
                {card.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
