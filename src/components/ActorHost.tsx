import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import { X } from "lucide-react";

export default function ActorHost() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedRole !== null) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [selectedRole]);

  return (
    <section
      id="actorHost"
      className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 bg-dark relative border-y border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.02)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-gradient-gold uppercase tracking-[0.25em] mb-8 font-light drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {t.actorHost.title}
          </h2>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {t.actorHost.roles.map((role, index) => (
            <motion.div
              layoutId={`rolecard-${index}`}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              onClick={() => setSelectedRole(index)}
              className="group relative overflow-hidden bg-dark-light/40 backdrop-blur-sm border-t border-b border-white/[0.03] transition-all duration-700 hover:bg-dark-light/60 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(197,160,89,0.05)] flex flex-col h-full rounded-sm p-8 sm:p-12 text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="flex flex-col flex-grow items-center justify-center relative z-20">
                <motion.div
                  layoutId={`roleline-${index}`}
                  className="w-[1px] h-12 bg-gold/40 mb-8 transition-all duration-700 group-hover:h-20 group-hover:bg-gold/80 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                />
                <motion.h3
                  layoutId={`roletitle-${index}`}
                  className="font-serif text-xl md:text-2xl text-white/90 mb-6 transition-all duration-500 tracking-[0.1em] uppercase leading-relaxed font-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#bf953f] group-hover:via-[#fcf6ba] group-hover:to-[#b38728]"
                >
                  {role.title}
                </motion.h3>
                <div className="flex flex-col items-center gap-4 w-full mt-auto">
                  <span className="text-gold/40 text-[10px] group-hover:animate-pulse">
                    ✧
                  </span>
                  <motion.p
                    layoutId={`rolesub-${index}`}
                    className="text-gray-500 font-light text-[10px] tracking-widest uppercase leading-relaxed max-w-[85%] mx-auto opacity-60"
                  >
                    {role.subtitle}
                  </motion.p>
                  
                  <div className="mt-4 opacity-70 group-hover:opacity-100 transition-all duration-500 border border-white/10 group-hover:border-gold/30 px-6 py-2 rounded-sm text-[10px] tracking-[0.2em] uppercase text-white/80 group-hover:text-gold/80 bg-white/[0.02]">
                    {t.actorHost.viewExperience}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedRole !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100]"
                onClick={() => setSelectedRole(null)}
              />

              <div className="fixed inset-0 z-[101] flex items-center justify-center p-0 sm:p-4 md:p-12 pointer-events-none">
                <motion.div
                  layoutId={`rolecard-${selectedRole}`}
                  className="bg-dark border-x sm:border border-white/[0.05] w-full h-full sm:h-auto sm:max-h-[90vh] max-w-5xl overflow-y-auto pointer-events-auto sm:rounded-sm shadow-2xl custom-scrollbar relative"
                >
                  <div className="sticky top-0 bg-dark/80 backdrop-blur-xl flex justify-end p-4 sm:p-6 z-30 border-b border-white/[0.05]">
                    <button
                      onClick={() => setSelectedRole(null)}
                      className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 sm:gap-3 group px-4 py-2 bg-white/[0.02] rounded-full hover:bg-white/[0.05]"
                    >
                      <span className="text-[10px] tracking-[0.3em] uppercase font-sans opacity-80">
                        {t.projects.close}
                      </span>
                      <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                  </div>

                  <div className="p-4 sm:p-8 md:p-14 pt-8 sm:pt-4 pb-16 sm:pb-20">
                    <div className="text-center mb-16 sm:mb-24 mt-4 sm:mt-8">
                      <motion.div
                        layoutId={`roleline-${selectedRole}`}
                        className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-gold/70 to-transparent mx-auto mb-10 sm:mb-12"
                      />
                      <motion.h3
                        layoutId={`roletitle-${selectedRole}`}
                        className="font-serif text-3xl sm:text-4xl md:text-6xl text-gradient-gold mb-6 sm:mb-8 tracking-[0.15em] uppercase font-light leading-tight mx-auto max-w-4xl drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] px-4"
                      >
                        {t.actorHost.roles[selectedRole].title}
                      </motion.h3>

                      <div className="bg-transparent border-t border-b border-white/[0.03] py-8 sm:py-12 max-w-3xl mx-auto mb-12 sm:mb-20 relative px-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                        <span className="text-gold/40 text-[10px] block mb-4 sm:mb-6 tracking-[0.4em]">
                          ✧
                        </span>
                        <motion.p
                          layoutId={`rolesub-${selectedRole}`}
                          className="text-white/80 text-xs sm:text-sm md:text-lg tracking-[0.2em] uppercase font-light leading-relaxed"
                        >
                          {t.actorHost.roles[selectedRole].subtitle}
                        </motion.p>
                      </div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: selectedRole !== null ? 0.2 : 0,
                        }}
                        className="text-gray-300 font-light font-sans text-sm sm:text-base md:text-xl leading-relaxed md:leading-[2.4] max-w-2xl mx-auto mb-16 sm:mb-24 md:text-justify text-left opacity-90 px-4 sm:px-0"
                      >
                        {t.actorHost.roles[selectedRole].description}
                      </motion.p>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                      {/* @ts-ignore */}
                      {t.actorHost.roles[selectedRole].images?.map(
                        (img: string, idx: number) => {
                          let containerClasses = "relative group overflow-hidden border border-white/[0.05] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-dark-light w-full";
                          
                          // Make the first image span 2 columns if there are multiple, or just keep it simple
                          if (idx === 0 && t.actorHost.roles[selectedRole].images.length > 1) {
                            containerClasses += " md:col-span-2 aspect-video";
                          } else {
                            containerClasses += " aspect-square sm:aspect-[4/3]";
                          }

                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.3 + idx * 0.1,
                                duration: 0.6,
                                ease: "easeOut",
                              }}
                              className={containerClasses}
                            >
                              <img
                                src={img}
                                alt={`${t.actorHost.roles[selectedRole].title} ${idx + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent pointer-events-none transition-colors duration-500" />
                            </motion.div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
