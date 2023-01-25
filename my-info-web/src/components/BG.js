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
          minWidth: 200.0,
          backgroundColor: 0xc51818,
          skyColor: 0xd79868,
          cloudColor: 0xdeadc7,
          speed: 1.6,
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
