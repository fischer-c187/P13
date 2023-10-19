import styles from './checkboxField.module.css';

function CheckboxField({ name, label, handleChange, checked }) {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        onChange={handleChange}
        type='checkbox'
        name={name}
        id={name}
        checked={checked}
        className={styles.checkbox}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default CheckboxField;
