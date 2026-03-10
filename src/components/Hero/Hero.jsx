import styles from './Hero.module.css';

const Hero = () => {
  const skills = ["React", "Node.js", "TypeScript", "SQL", "PostgreSQL" ,"Git", "Cloudinary", "Postman"];

  return (
    <section id="inicio" className={styles.hero}>
      <h1 className={styles.name}>Luca Morales</h1>
    <p className={styles.title}>Estudiante de Sistemas & Junior Developer</p>
      
      <div className={styles.skillContainer}>
        {skills.map(skill => (
          <span key={skill} className={styles.skillBadge}>{skill}</span>
        ))}
      </div>

      {/* Nuevo botón para descargar CV */}
      <div className={styles.actions}>
        <a 
          href="/CV_Luca_Morales.pdf" 
          download="CV_Luca_Morales.pdf" 
          className={styles.cvButton}
        >
          Descargar CV ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;