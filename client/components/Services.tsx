import { useEffect, useState } from "react";
import { Users, Zap } from "lucide-react";

interface ServicesProps {
  language: "en" | "es";
}

export default function Services({ language }: ServicesProps) {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: {
      title: "What We Do",
      forCreators: {
        title: "Events",
        description:
          "Cultural and corporate experiences that bring people together and create lasting connections.",
        services: [
          "Cultural events & festivals",
          "Brand activations",
          "Workshops & conferences",
          "Community experiences",
        ],
      },
      forBrands: {
        title: "Digital Projects",
        description:
          "Digital solutions that help brands and creators grow their presence and impact.",
        services: [
          "Web design & development",
          "Content production & strategy",
          "Online presence optimization",
          "Creative collaborations",
        ],
      },
    },
    es: {
      title: "Qué Hacemos",
      forCreators: {
        title: "Eventos",
        description:
          "Experiencias culturales y corporativas que reúnen personas y crean conexiones duraderas.",
        services: [
          "Eventos culturales y festivales",
          "Activaciones de marca",
          "Talleres y conferencias",
          "Experiencias comunitarias",
        ],
      },
      forBrands: {
        title: "Proyectos Digitales",
        description:
          "Soluciones digitales que ayudan a marcas y creadores a crecer su presencia e impacto.",
        services: [
          "Diseño y desarrollo web",
          "Producción de contenido y estrategia",
          "Optimización de presencia online",
          "Colaboraciones creativas",
        ],
      },
    },
  };

  const copy = content[language];

  return (
    <section id="services" className="section">
      <div className="section-container">
        <h2
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {copy.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For Creators */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            <div className="card-base card-hover">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">{copy.forCreators.title}</h3>
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {copy.forCreators.description}
              </p>
              <ul className="space-y-3">
                {copy.forCreators.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For Brands */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <div className="card-base card-hover">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-accent2" />
                <h3 className="text-2xl font-bold">{copy.forBrands.title}</h3>
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {copy.forBrands.description}
              </p>
              <ul className="space-y-3">
                {copy.forBrands.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-accent2 font-bold mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
