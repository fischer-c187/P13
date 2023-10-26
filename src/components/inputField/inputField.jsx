import styles from './inputField.module.css';


/**
 * Provides a customizable and reusable input field element for forms.
 * 
 * 
 * @param {Object} props - The props object
 * @param {string} props.name - The name and ID attribute for the input element
 * @param {string} [props.label] - An optional label for the input element
 * @param {Function} props.handleChange - Event handler for the input change event
 * @param {string} props.value - The current value of the input element
 * @param {string} [props.placeholder=''] - An optional placeholder text for the input field
 * @param {string} [props.type='text'] - Specifies the input type (e.g., text, password, email)
 * 
 * 
 */
function InputField({ name, label, handleChange, value, placeholder='', type='text' }) {

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
        </label>
      )}
      <input
        onChange={handleChange}
        name={name}
        id={name}
        type={type}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputField;
