import styles from './checkboxField.module.css';

/**
 * CheckboxField Component
 * 
 * @param {Object} props - The props of the CheckboxField component
 * @param {string} props.name - The name attribute for the checkbox input
 * @param {string} props.label - The label text to be displayed next to the checkbox
 * @param {function} props.handleChange - The function to be called when the checkbox state changes
 * @param {boolean} props.checked - The current checked state of the checkbox

 * @returns {React.Element} The rendered CheckboxField component
 */
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
