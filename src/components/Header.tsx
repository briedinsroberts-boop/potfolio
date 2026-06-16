import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex justify-center items-center px-4 md:px-12 ${
        isScrolled ? "bg-dark/80 backdrop-blur-md py-4 shadow-md shadow-black/50 border-b border-white/5" : "py-6 md:py-10 bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <nav className="flex gap-4 md:gap-12 px-4 md:px-8 py-2 bg-dark/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] md:text-xs tracking-[0.2em] font-sans text-white/70">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-gold transition-colors uppercase cursor-pointer pointer-events-auto"
        >
          {t.nav.about}
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-gold transition-colors uppercase cursor-pointer pointer-events-auto"
        >
          {t.nav.projects}
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-gold transition-colors uppercase cursor-pointer pointer-events-auto"
        >
          {t.nav.contact}
        </button>
      </nav>

      <div className="absolute right-4 md:right-12">
        <LanguageSwitcher />
      </div>
    </header>
  );
}

