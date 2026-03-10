import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import WhatsApp from './components/WhatsApp/WhatsApp.jsx';
// Importamos el nuevo componente
import ParticleBackground from './components/ParticleBackground/ParticleBackground.jsx';

function App() {
  return (
    <main>
      {/* Colocamos el fondo de partículas aquí */}
      <ParticleBackground />
      
      <Hero />
      <Projects />
      <About />
      <Contact />
      <WhatsApp />
    </main>
  );
}

export default App;