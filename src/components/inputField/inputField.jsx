import styles from './inputField.module.css';

function InputField({ name, label, handleChange, value }) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>
      <input
        onChange={handleChange}
        name={name}
        id={name}
        type='text'
        value={value}
        className={styles.input}
        required
      />
    </div>
  );
}

export default InputField;
