import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Showcase from "@/components/Showcase";
import CollaborateV2 from "@/components/CollaborateV2";
import Footer from "@/components/Footer";

type Language = "en" | "es";

export default function Index() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Persist language preference
    const savedLanguage = localStorage.getItem(
      "maurique-language",
    ) as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("maurique-language", lang);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />
        <Mission language={language} />
        <Showcase language={language} />
        <CollaborateV2 language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
