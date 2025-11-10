import { useEffect, useState } from "react";

interface PhilosophyProps {
  language: "en" | "es";
}

export default function Philosophy({ language }: PhilosophyProps) {
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

    const element = document.getElementById("philosophy-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: "We believe technology should inspire, not intimidate. Maurique Labs exists to make innovation human — to help people build, connect, and create systems with soul.",
    es: "Creemos que la tecnología debe inspirar, no intimidar. Maurique Labs existe para hacer la innovación humana �� para ayudar a las personas a construir, conectar y crear sistemas con alma.",
  };

  const text = content[language];

  return (
    <section
      id="philosophy"
      className="section bg-card/30 border-y border-border"
      id="philosophy-section"
    >
      <div className="section-container">
        <div className={`max-w-3xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            <span className="text-accent">Systems</span> with{" "}
            <span className="text-accent2">Soul</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
            {text}
          </p>
        </div>

        {/* Subtle visual element */}
        <div className="mt-16 opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 100" className="w-full max-w-lg">
            <path
              d="M 0 50 Q 50 25 100 50 T 200 50 T 300 50 T 400 50"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
