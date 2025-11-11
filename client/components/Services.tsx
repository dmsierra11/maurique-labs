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
        title: "For Creators",
        description:
          "We empower independent artists and creators with tools to grow and showcase their work.",
        services: [
          "Landing pages & digital presence",
          "Social media & content strategy",
          "Platform management & optimization",
          "Visual identity & branding",
        ],
      },
      forBrands: {
        title: "For Brands & Companies",
        description:
          "We design cultural experiences that deepen audience connection.",
        services: [
          "Hackathons & innovation events",
          "Festivals & cultural experiences",
          "Workshops & team building",
          "Corporate offsites & retreats",
        ],
      },
    },
    es: {
      title: "Qué Hacemos",
      forCreators: {
        title: "Para Creadores",
        description:
          "Empoderamos artistas y creadores independientes con herramientas para crecer y mostrar su trabajo.",
        services: [
          "Landing pages y presencia digital",
          "Estrategia en redes sociales y contenido",
          "Gestión y optimización de plataformas",
          "Identidad visual y branding",
        ],
      },
      forBrands: {
        title: "Para Marcas y Empresas",
        description:
          "Diseñamos experiencias culturales que profundizan la conexión con la audiencia.",
        services: [
          "Hackathons y eventos de innovación",
          "Festivales y experiencias culturales",
          "Talleres y team building",
          "Retiros corporativos y offsites",
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
