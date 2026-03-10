import styles from './WhatsApp.module.css';

const WhatsApp = () => {
  const phoneNumber = "543534093230"; // Tu número con código de país
  const msg = encodeURIComponent("Hola Luca, vi tu portfolio y me gustaría contactarte.");
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${msg}`}
      className={styles.floatButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  );
};

export default WhatsApp;