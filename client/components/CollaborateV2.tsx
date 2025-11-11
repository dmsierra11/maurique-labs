import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

interface CollaborateProps {
  language: "en" | "es";
}

export default function Collaborate({ language }: CollaborateProps) {
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

    const element = document.getElementById("collaborate");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const content = {
    en: {
      sectionTitle: "Let's Talk",
      sectionDesc:
        "We collaborate with brands, startups, and collectives to design experiences that matter — from hackathons to festivals. Whether you're looking to connect with your audience, inspire your team, or create a cultural moment, let's explore what we can build together.",
      contactTitle: "Get in Touch",
      location: "Barcelona",
      email: "hello@mauriquelabs.com",
    },
    es: {
      sectionTitle: "Hablemos",
      sectionDesc:
        "Colaboramos con marcas, startups y colectivos para diseñar experiencias que importan — desde hackathons hasta festivales. Ya sea que busques conectar con tu audiencia, inspirar a tu equipo o crear un momento cultural, exploremos lo que podemos construir juntos.",
      contactTitle: "Ponte en Contacto",
      location: "Barcelona",
      email: "hello@mauriquelabs.com",
    },
  };

  const copy = content[language];

  return (
    <section id="collaborate" className="section">
      <div className="section-container">
        <h2 className={`mb-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {copy.sectionTitle}
        </h2>

        <p className={`text-lg sm:text-xl text-foreground/70 max-w-3xl mb-16 leading-relaxed transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}>
          {copy.sectionDesc}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
            <h3 className="text-2xl font-bold mb-8">{copy.contactTitle}</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">{copy.location}</p>
                  <p className="text-foreground/60 text-sm">Spain</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${copy.email}`}
                  className="font-semibold text-foreground hover:text-accent transition-colors"
                >
                  {copy.email}
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#collaborate"
              className="btn-primary inline-flex items-center gap-2"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}>
            <ContactForm language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}
