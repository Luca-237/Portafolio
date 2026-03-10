import { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('sobre_mi');

  return (
    <section id="sobre-mi" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>¿Quien soy?</h2>
      
      <div className={styles.terminalContainer}>
        {}
        <div className={styles.terminalHeader}>
          <div className={styles.windowControls}>
            <span className={styles.controlRed}></span>
            <span className={styles.controlYellow}></span>
            <span className={styles.controlGreen}></span>
          </div>
          
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'sobre_mi' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('sobre_mi')}
            >
              sobre_mi.md
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'hobbies' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('hobbies')}
            >
              hobbies.txt
            </button>
          </div>
        </div>

        {}
        <div className={styles.terminalBody}>
          {activeTab === 'sobre_mi' && (
            <div className={styles.codeContent}>
              <p className={styles.prompt}>
                <span className={styles.user}>luca@portfolio</span>:<span className={styles.path}>~/about</span>$ cat sobre_mi.md
              </p>
              <div className={styles.markdownOutput}>
                <p>
                  Tengo 21 años y estoy transitando mi último año en la carrera de Analista en Sistemas de Computación. Me apasiona el desarrollo de software y la creación de soluciones eficientes y creativas.
                </p>
                <br />
                <p>
                  Además de mi perfil tecnológico, disfruto del deporte, los juegos y el servicio. Tengo una mentalidad sólida orientada a la resolución de problemas y al pensamiento crítico. Me desempeño adecuadamente tanto en entornos colaborativos como de forma autónoma, siempre manteniendo la humildad suficiente para aprender de cada experiencia y de quienes me rodean.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'hobbies' && (
            <div className={styles.codeContent}>
              <p className={styles.prompt}>
                <span className={styles.user}>luca@portfolio</span>:<span className={styles.path}>~/about</span>$ cat hobbies.txt
              </p>
              <pre className={styles.jsonOutput}>
{`{
  "hobbies": {
    "Bombero voluntario": [
      "Rescate acuático",
      "Departamento de comunicaciones"
    ],
    "deportes: [
      "Running/OCR",
      "Ciclismo",
      "Natación"
    ],
    "lectura: [
      "Filosofía",
      "Novelas variadas"
    ],
    "intereses_tecnicos": [
      "Armado de computadoras",
      "Hardware vintage"
    ]
  }
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;