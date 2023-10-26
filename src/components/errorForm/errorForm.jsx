import styles from './errorForm.module.css';

/**
 * A functional React component for displaying error messages.
 * 
 * 
 * @param {Object} props - The props object
 * @param {string} props.errorText - The error message to display
 * 
 * This component is a simple wrapper for error messages, meant to standardize
 * the way errors are presented to the user across the application.
 * 
 */
function ErrorForm({ errorText }) {
  return (
    <div className={styles.errorWrapper}>
      <p>{errorText}</p>
    </div>
  );
}

export default ErrorForm;