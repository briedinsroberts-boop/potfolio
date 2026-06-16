import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute top-6 right-6 md:top-10 md:right-12 z-[100] flex gap-3 text-xs font-sans tracking-widest font-light items-center pointer-events-auto">
      <button 
        onClick={() => setLanguage('en')}
        className={`transition-all duration-300 ${language === 'en' ? 'text-gold' : 'text-white/40 hover:text-white'}`}
      >
        EN
      </button>
      <span className="text-white/20 font-thin">|</span>
      <button 
        onClick={() => setLanguage('lv')}
        className={`transition-all duration-300 ${language === 'lv' ? 'text-gold' : 'text-white/40 hover:text-white'}`}
      >
        LV
      </button>
    </div>
  );
}
