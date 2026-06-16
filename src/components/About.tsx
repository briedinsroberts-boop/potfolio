import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 bg-dark overflow-hidden relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-widest text-gradient-gold mb-8 uppercase font-light drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {t.about.title}
          </h2>
          <p className="font-serif italic text-lg md:text-2xl text-white/80 font-light tracking-[0.15em]">
            {t.about.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold/40 to-transparent mx-auto mb-16" />

          <div className="text-gray-300/80 font-sans text-base sm:text-lg md:text-xl leading-relaxed md:leading-[2.4] font-light max-w-2xl mx-auto text-center tracking-wide">
            <p className="opacity-90">{t.about.bio}</p>
          </div>

          <div className="mt-16 sm:mt-24 max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold/40 mb-12" />
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-gradient-gold text-center font-light leading-relaxed italic px-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.15)]">
              {t.about.quote}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
