import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

const Contact = () => {
  // Reemplaza "TU_ID_AQUÍ" por el ID que te dio Formspree
  const [state, handleSubmit] = useForm("mykneldg");

  if (state.succeeded) {
    return (
      <section id="contacto" className={styles.contactSection}>
        <div className={styles.successMessage}>
          <h2>¡Mensaje enviado con éxito!</h2>
          <p>Gracias por contactarme, Luca te responderá a la brevedad.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className={styles.contactSection}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2 className={styles.title}>Hablemos.</h2>
          <p className={styles.subtitle}>
            ¿Tenés un proyecto en mente o alguna consulta técnica? 
            Escribime y nos ponemos en marcha.
          </p>
          <div className={styles.links}>
            <a href="mailto:luca.mmorales@gmail.com" className={styles.email}>luca.mmorales@gmail.com</a>
            <a href="https://github.com/Luca-237" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            id="name"
            name="name"
            type="text" 
            placeholder="Nombre" 
            required 
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input 
            id="email"
            name="email"
            type="email" 
            placeholder="Email" 
            required 
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea 
            id="message"
            name="message"
            placeholder="Tu mensaje..." 
            rows="5" 
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button 
            type="submit" 
            className={styles.submitBtn} 
            disabled={state.submitting}
          >
            {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;