import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProjectsProps {
  language: "en" | "es";
}

export default function Projects({ language }: ProjectsProps) {
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: [
      {
        title: "Bejaus Lab",
        description:
          "A creative hub merging café culture and innovation — where community meets technology.",
        link: "https://link-to-bejaus-lab",
      },
      {
        title: "Fantasy Sports Engine",
        description:
          "Real-time draft system blending AI analytics and social gaming.",
        link: "https://link-to-fantasy-engine",
      },
      {
        title: "AI Builders Program",
        description:
          "Workshops and templates to help non-engineers ship software with AI.",
        link: "https://link-to-ai-builders",
      },
      {
        title: "Onda Nueva / VR Showroom",
        description:
          "Immersive VR + music experiences (Tribe XR, Beat Saber).",
        link: "https://link-to-onda-nueva",
      },
    ],
    es: [
      {
        title: "Bejaus Lab",
        description:
          "Un centro creativo que fusiona la cultura de café e innovación — donde la comunidad se encuentra con la tecnología.",
        link: "https://link-to-bejaus-lab",
      },
      {
        title: "Fantasy Sports Engine",
        description:
          "Sistema de draft en tiempo real que combina analítica de IA y juegos sociales.",
        link: "https://link-to-fantasy-engine",
      },
      {
        title: "Programa AI Builders",
        description:
          "Talleres y plantillas para ayudar a no ingenieros a lanzar software con IA.",
        link: "https://link-to-ai-builders",
      },
      {
        title: "Onda Nueva / Showroom VR",
        description:
          "Experiencias inmersivas de VR + música (Tribe XR, Beat Saber).",
        link: "https://link-to-onda-nueva",
      },
    ],
  };

  const projects = content[language];
  const sectionTitle = language === "en" ? "Selected Projects" : "Proyectos Destacados";

  return (
    <section id="projects" className="section" id="projects-section">
      <div className="section-container">
        <h2 className={`mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {sectionTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-base card-hover group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-accent group-hover:text-accent2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent group-hover:text-accent2 transition-colors ml-4 flex-shrink-0 mt-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
