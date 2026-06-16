import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import React, { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    <path d="M16.5 16c-1.5 1.5-3 1.5-5 0s-3.5-3.5-5-5c-1.5-2-1.5-3.5 0-5 .5-.5 1-1 1.5-1s1 .5 1.5 1.5c.5.5.5 1 0 1.5s-1 1-1 1.5c0 1 1 2 2 3s2 2 3 2c.5 0 1-.5 1.5-1s1-.5 1.5 0c1 .5 1.5 1 1.5 1.5s-.5 1-1 1.5z"></path>
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmissionStatus("submitting");
    setErrorMessage("");

    fetch("https://formsubmit.co/ajax/briedinsroberts@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const text = await response.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch (err) {
          // Response was not JSON
        }

        if (!response.ok) {
          const rawMessage = data?.message || text || "Server returned " + response.status;
          throw new Error(rawMessage);
        }

        if (data && data.success === "false") {
          throw new Error(data.message || "Submission failed");
        }

        return data;
      })
      .then(() => {
        setSubmissionStatus("success");
        form.reset();
        setTimeout(() => setSubmissionStatus("idle"), 6000);
      })
      .catch((error: any) => {
        console.error("FormSubmit inquiry submission error:", error);
        setSubmissionStatus("error");
        setErrorMessage(error.message || "");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 bg-dark relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-gradient-gold mb-8 uppercase tracking-[0.25em] font-light drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            {t.contact.title}
          </h2>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent mb-12" />

          <div className="flex flex-col gap-6 text-lg sm:text-xl md:text-2xl font-light tracking-widest font-sans mb-16 text-white text-center opacity-90">
            <a
              href="mailto:briedinsroberts@gmail.com"
              className="hover:text-gold transition-colors duration-500"
            >
              briedinsroberts@gmail.com
            </a>
            <a
              href="tel:+37125678815"
              className="hover:text-gold transition-colors duration-500"
            >
              +371 25678815
            </a>
            <span className="text-gray-400 text-sm uppercase tracking-[0.3em] mt-6">
              {t.contact.location}
            </span>
          </div>

          <div className="flex justify-center items-center gap-8 md:gap-12 font-sans mb-24">
            <a
              href="https://wa.me/37125678815"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors duration-500 group"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
            </a>
            <a
              href="https://www.instagram.com/briedinsroberts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors duration-500 group"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition-colors duration-500 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
            </a>
          </div>
        </motion.div>

        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto w-full bg-dark/40 backdrop-blur-md border border-white/[0.03] p-8 sm:p-12 md:p-16 relative overflow-hidden rounded-sm mt-16"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <h3 className="font-serif text-xl md:text-2xl text-white/90 mb-6 tracking-[0.2em] uppercase font-light text-center">
            {t.contact.form.title}
          </h3>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed tracking-wide italic text-center mb-12">
             {t.contact.openToProjects}
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left relative font-sans"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Event Inquiry from Website"
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            <div className="relative">
              <input
                name="name"
                type="text"
                required
                placeholder={t.contact.form.name}
                className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-500 font-light tracking-wide bg-dark text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <input
                name="company"
                type="text"
                placeholder={t.contact.form.company}
                className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-500 font-light tracking-wide bg-dark text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <input
                name="email"
                type="email"
                required
                placeholder={t.contact.form.email}
                className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-500 font-light tracking-wide bg-dark text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.contact.form.message}
                className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-500 font-light tracking-wide resize-none bg-dark text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              disabled={submissionStatus === "submitting"}
              className={`w-full py-5 tracking-[0.3em] text-xs md:text-sm uppercase font-light border transition-all duration-700 mt-8 ${
                submissionStatus === "submitting"
                  ? "bg-dark-light border-white/10 text-white/40 cursor-not-allowed"
                  : "text-white border-gold/40 hover:bg-gold hover:text-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              }`}
            >
              {submissionStatus === "submitting" ? t.contact.form.loading : t.contact.form.submit}
            </button>
          </form>

          <AnimatePresence>
            {submissionStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-sm border border-gold/20 p-6"
              >
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6 animate-pulse">
                  ✓
                </div>
                <p className="text-gold font-serif text-lg md:text-xl tracking-wider text-center max-w-md">
                  {t.contact.form.success}
                </p>
              </motion.div>
            )}

            {submissionStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-sm border border-red-500/20 p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-full border border-red-500/40 flex items-center justify-center text-red-500 mb-6">
                  ✕
                </div>
                <p className="text-red-400 font-serif text-lg tracking-wider text-center mb-4 uppercase">
                  {useLanguage().language === "lv" ? "Sūtīšanas kļūda" : "Submission Error"}
                </p>
                
                {errorMessage.toLowerCase().includes("activation") || 
                errorMessage.toLowerCase().includes("activate") || 
                errorMessage.toLowerCase().includes("first submit") ? (
                  <p className="text-gray-300 font-sans text-xs sm:text-sm text-center leading-relaxed max-w-md mb-8">
                    {useLanguage().language === "lv" ? (
                      <>
                        Šī ir pirmā pieteikuma reize! FormSubmit ir nosūtījis apstiprinājuma e-pastu.
                        <br /><br />
                        Lūdzu, pārbaudiet savu e-pastu <strong>briedinsroberts@gmail.com</strong>, atrodiet ziņu no <strong>FormSubmit</strong> un noklikšķiniet uz pogas <strong>"Activate Form"</strong> (Apstiprināt formu). Pēc tam forma darbosies nevainojami!
                      </>
                    ) : (
                      <>
                        This is the first form submission! FormSubmit has sent a confirmation email.
                        <br /><br />
                        Please check your email <strong>briedinsroberts@gmail.com</strong>, find the message from <strong>FormSubmit</strong>, and click the <strong>"Activate Form"</strong> button to enable submissions. Once activated, subsequent submissions will go through instantly!
                      </>
                    )}
                  </p>
                ) : (
                  <p className="text-gray-300 font-sans text-xs sm:text-sm text-center leading-relaxed max-w-md mb-8">
                     {t.contact.form.error}
                     <span className="block mt-2 text-gray-500 text-[10px] font-mono select-all">
                       {errorMessage}
                     </span>
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setSubmissionStatus("idle")}
                  className="px-6 py-2 border border-white/20 hover:border-white/60 text-xs text-white/80 hover:text-white uppercase tracking-widest transition-colors duration-500 rounded-sm"
                >
                  {useLanguage().language === "lv" ? "Aizvērt" : "Close"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-32 pt-8 flex flex-col items-center gap-6 text-[9px] md:text-[10px] tracking-[0.3em] text-gray-500/80 uppercase font-sans">
        <p>
          © {new Date().getFullYear()} Roberts Briediņš. {t.contact.rights}
        </p>
        <p className="opacity-70">{t.contact.role}</p>
      </div>
    </section>
  );
}
