export default {
  light: {
    bg: 'bg-[#D2D2D2]',
    textColor: 'text-[#24242B]', // black
    borderColor: 'border-[#24242B]', // black
    shadow: 'shadow-[#24242B]', // black
    containerBg: 'bg-glassy-light',
    vantaAnimationObj: {
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      highlightColor: 0xffffff,
      midtoneColor: 0x000000,
      lowlightColor: 0x000000,
      baseColor: 0xffffff,
      blurFactor: 0.5,
      speed: 0.5,
    }
  },
  dark: {
    bg: 'bg-[#24242B]', // black
    textColor: 'text-[#D2D2D2]', // white
    borderColor: 'border-[#D2D2D2]', // white
    shadow: 'shadow-[#D2D2D2]', // white
    containerBg: 'bg-glassy-light',
    vantaAnimationObj: {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      highlightColor: 0x000000, 
      midtoneColor: 0x000000, 
      lowlightColor: 0xffffff, 
      baseColor: 0x000000,
      blurFactor: 0.5,
      speed: 1,
    }
  }
}