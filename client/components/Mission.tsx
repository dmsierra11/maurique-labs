import { useEffect, useState } from "react";

interface MissionProps {
  language: "en" | "es";
}

export default function Mission({ language }: MissionProps) {
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

    const element = document.getElementById("mission");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: "Maurique Labs creates experiences that connect people, ideas, and disciplines. We believe the most powerful innovation happens when creativity and technology meet.",
    es: "Maurique Labs crea experiencias que conectan personas, ideas y disciplinas. Creemos que la innovación más poderosa ocurre cuando la creatividad y la tecnología se encuentran.",
  };

  const text = content[language];

  return (
    <section id="mission" className="section bg-card/30">
      <div className="section-container">
        <div
          className={`max-w-3xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Our <span className="text-accent">Mission</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
