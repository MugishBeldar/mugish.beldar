import * as THREE from "three";
import { cn } from './lib/util';
import themePresets from './theme'
import FOG from "vanta/dist/vanta.fog.min.js";
import { ThemeContext } from './context/theme';
import React, { use, useEffect, useRef, useState } from 'react'
import { Experience, Hero, Navbar, Skills } from './components'

function App() {
  const vantaRef = useRef(null);
  const { theme } = use(ThemeContext);
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    let vantaAnimationObj = {
      ...themePresets[theme].vantaAnimationObj,
      el: vantaRef.current,
      THREE: THREE,
    };
    setVantaEffect(FOG(vantaAnimationObj));
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <section ref={vantaRef} className="w-full min-h-screen">
      <div className="relative">
        <div className={cn(`fixed top-0 left-0 z-10 w-full`, themePresets[theme].containerBg)}>
          <div className="container mx-auto px-4 lg:px-0 w-full py-4">
            <Navbar />
          </div>
        </div>
        <div className={cn('container mx-auto w-full px-4 lg:px-0 pt-[100px] lg:pt-[120px]', themePresets[theme].textColor)}>
          <div className={cn('p-4', themePresets[theme].containerBg)}>
            <Hero />
          </div>
          <div className={cn('p-4',)}>
            <Skills />
          </div>
          <div className={cn('p-4')}>
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;