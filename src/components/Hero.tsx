import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <iframe
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.05)",
            pointerEvents: "none",
            backgroundColor: "black",
          }}
          src="https://www.youtube.com/embed/7H1_TQkW0Y8?autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&iv_load_policy=3&playlist=7H1_TQkW0Y8&playsinline=1"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#070707_100%)] opacity-70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070707]/80 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent z-[2] pointer-events-none" />

      {/* Subtle Film Grain */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Mobile Logo Top Left */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
        className="absolute top-6 left-6 z-[100] md:hidden pointer-events-none"
      >
        <motion.img
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="https://drive.google.com/thumbnail?id=1wV_Ijxjvr9cXLIIqKH_Y2QgYuxNuE2pq&sz=w1000"
          alt={t.hero.altLeft || t.hero.altMobile || "Logo"}
          className="w-[75px]"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pb-12 pt-[15vh]">
        {/* Logos Container */}
        <div className="w-full flex-1 flex items-center justify-between px-[5%] md:px-[10%]">
          {/* Left Desktop Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            className="pointer-events-none hidden md:block"
          >
            <motion.img
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://drive.google.com/thumbnail?id=1jcd8Qn2HTMQe99fp8ZHC6ALeg8J_7PX9&sz=w1000"
              alt={t.hero.altLeft}
              className="w-[140px] lg:w-[180px] opacity-80 drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]"
            />
          </motion.div>

          {/* Right Desktop Logo */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="pointer-events-none hidden md:block"
          >
            <motion.img
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 6,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="https://drive.google.com/thumbnail?id=1jcd8Qn2HTMQe99fp8ZHC6ALeg8J_7PX9&sz=w1000"
              alt={t.hero.altRight}
              className="w-[140px] lg:w-[180px] opacity-80 drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]"
            />
          </motion.div>
        </div>

        {/* Custom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center cursor-pointer group pointer-events-auto"
          onClick={scrollToAbout}
        >
          <span className="text-white/80 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-sans font-light mb-6 group-hover:text-gold transition-all duration-500 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/5 group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {t.hero.scroll}
          </span>
          <div className="w-[1px] h-16 md:h-24 bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-gold/80 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
