import styles from './Projects.module.css';

const Projects = () => {
  const projectList = [
    {
      title: "Terminal de Autoservicio",
      description: "Sistema frontend con React simulando un autoservicio, se utilizó Cloudinary para la gestión de imágenes.",
      tech: ["Node.js", "React", "Cloudinary"],
      link: "https://autoservicio-xi.vercel.app/",
      image: "/autoservicio.png" 
    },
    {
      title: "Clima",
      description: "App de pronóstico del tiempo con integración de API.",
      tech: ["React", "OpenWeatherMap", "Node.js"],
      link: "https://fitoweather.vercel.app/",
      image: "/tiempo.png" 
    },
    {
      title: "Kanban Board",
      description: "Tablero Kanban de tareas dinámico con persistencia de datos y drag-and-drop.",
      tech: ["React", "dnd-kit", "LocalStorage", "Node.js"],
      link: "https://kanban-board-demo-two.vercel.app/",
      image: "/kanban.png" 
    }
  ];

  return (
    <section id="proyectos" className={styles.container}>
      <h2 className={styles.sectionTitle}>Proyectos Seleccionados</h2>
      <div className={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.card}>
            {}
            <div className={styles.imageContainer}>
              <img 
                src={project.image} 
                alt={`Vista previa de ${project.title}`} 
                className={styles.projectImage} 
              />
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.demoButton}>
                Live Demo <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;