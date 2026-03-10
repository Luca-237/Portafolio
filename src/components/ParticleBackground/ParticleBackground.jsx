import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };


  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false }, 
        onHover: { enable: true, mode: "repulse" }, 
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: {
        value: "#ff6b1a", 
      },
      links: {
        color: "#ff6b1a",
        distance: 150,
        enable: true, 
        opacity: 0.8, 
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" }, 
        random: true,
        speed: 1, 
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 }, 
        value: 70, 
      },
      opacity: {
        value: { min: 2, max: 4 }, 
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 }, 
      },
    },
    detectRetina: true,
    fullScreen: { enable: false }, 
  };

  if (!init) return null; 

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="particle-canvas" 
    />
  );
};

export default ParticleBackground;