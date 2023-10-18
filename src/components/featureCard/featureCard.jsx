import styles from './featureCard.module.css';

/**
 * FeatureCard Component
 * 
 * A reusable card component for displaying feature information.
 * 
 * 
 * @param {Object} props - The props object
 * @param {string} props.icon - The URL of the icon image
 * @param {string} props.title - The title text for the feature
 * @param {string} props.text - The description text for the feature
 * 
 */
function FeatureCard({ icon, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src={icon}
          alt='icon feature'
          aria-hidden
        />
      </div>
      <h3 className={`${styles.title} ${styles.fadeAnimation}`}>{title}</h3>
      <p className={`${styles.text} ${styles.fadeAnimation}`}>{text}</p>
    </div>
  );
}

export default FeatureCard;
