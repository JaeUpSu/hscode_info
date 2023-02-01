import React, { useState, useEffect, useRef } from "react";

import CLOUDS from "vanta/dist/vanta.clouds.min";

const BG = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 900.0,
          minWidth: 450.0,
          backgroundColor: 0xf92525,
          skyColor: 0xa3bff2,
          cloudColor: 0xbfadf2,
          cloudShadowColor: 0x144572,
          sunColor: 0xffe918,
          sunGlareColor: 0xff5830,
          sunlightColor: 0xf7e8e8,
          speed: 1.3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={myRef}></div>
    </>
  );
};

export default BG;
