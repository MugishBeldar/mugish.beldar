import React, { use, useEffect, useRef, useState } from 'react'
import { Navbar } from './components'
import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";
import { ThemeContext } from './context/theme';
import themePresets from './theme'
import { cn, getColorCode } from './lib/util';
import { Card } from 'pixel-retroui';

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
        <Card
          textColor={getColorCode(themePresets[theme].textColor)}
          borderColor={getColorCode(themePresets[theme].borderColor)}
          shadowColor={getColorCode(themePresets[theme].shadowColor)}
          className={cn(`fixed top-0 left-0 z-10 w-full`, themePresets[theme].containerBg)}>
          <div className="container mx-auto px-4 w-full py-4">
            <Navbar />
          </div>
        </Card>
        <div className="container mx-auto pt-[your-navbar-height]">
        </div>
      </div>
    </section>
  );
}

export default App;


// import React, { useEffect, useRef, useState } from 'react'
// import { Navbar } from './components'
// import FOG from "vanta/dist/vanta.fog.min.js";
// import * as THREE from "three";

// function App() {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
// FOG({
//   el: vantaRef.current,
//   THREE: THREE,
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: window.innerHeight,
//   minWidth: window.innerWidth,
//   highlightColor: 0x000000,
//   midtoneColor: 0x000000,
//   lowlightColor: 0xffffff,
//   baseColor: 0x000000,
//   blurFactor: 0.5,
//   speed: 1,
// })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <section ref={vantaRef} className="text-white absolute top-0 left-0 w-full h-full">
//       {/* Dark Mode Glassy Navbar */}
//       <div className="fixed top-0 left-0 w-full p-4 bg-black/30 backdrop-blur-lg backdrop-saturate-150 shadow-md">
//         <Navbar />
//       </div>
//     </section>
//   );
// }

// export default App;

