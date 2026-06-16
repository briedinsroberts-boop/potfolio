/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ActorHost from './components/ActorHost';
import Contact from './components/Contact';
import LanguageSwitcher from './components/LanguageSwitcher';
import AudioPlayer from './components/AudioPlayer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-dark min-h-screen selection:bg-gold/30 selection:text-white relative font-sans text-white">
        <AudioPlayer />
        <LanguageSwitcher />
        <Hero />
        <About />
        <Projects />
        <ActorHost />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

