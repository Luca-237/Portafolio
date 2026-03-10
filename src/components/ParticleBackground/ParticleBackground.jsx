import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Cargamos la versión liviana

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // Esta función inicializa el motor de tsparticles una sola vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // Aquí puedes loguear algo si necesitas verificar que cargó
    // console.log("Partículas cargadas:", container);
  };

  // --- CONFIGURACIÓN DE LAS PARTÍCULAS ---
  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false }, // No interactuar al click para mantenerlo minimalista
        onHover: { enable: true, mode: "repulse" }, // Sutil repulsión al pasar el mouse
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: {
        value: "#ff6b1a", // TU COLOR DE ACENTO NARANJA
      },
      links: {
        color: "#ff6b1a",
        distance: 150,
        enable: true, // Habilitamos las líneas entre partículas para el toque técnico
        opacity: 0.8, // Líneas extremadamente tenues
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" }, // Reaparecen por el otro lado
        random: true,
        speed: 1, // MOVIMIENTO MUY LENTO
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 }, // Cantidad basada en el área
        value: 70, // Número de partículas equilibrado
      },
      opacity: {
        value: { min: 2, max: 4 }, // Sutiles y con opacidad variable
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
        value: { min: 1, max: 2 }, // Partículas pequeñas
      },
    },
    detectRetina: true,
    fullScreen: { enable: false }, // Se controla por CSS en el contenedor
  };

  if (!init) return null; // No renderizar nada hasta que el motor esté listo

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      // Le damos una clase CSS para posicionarlo de fondo
      className="particle-canvas" 
    />
  );
};

export default ParticleBackground;