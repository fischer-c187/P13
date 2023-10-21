import { useState } from 'react';

import InputField from '../inputField/inputField';

import styles from './editUserForm.module.css';
import { useTranslation } from 'react-i18next';

function EditUserForm({ firstname, lastname, handleClickCancel }) {
  const { t } = useTranslation('userPage');
  const [user, setUser] = useState({
    firstname: firstname,
    lastname: lastname,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <InputField
          name='firstname'
          placeholder={firstname}
          value={user.firstname}
          handleChange={handleChange}
        />
        <InputField
          name='lastname'
          placeholder={lastname}
          value={user.lastname}
          handleChange={handleChange}
        />
      </div>

      <div className={styles.btnContainer}>
        <button type='submit' className={styles.btn}>
          {t('saveBtn')}
        </button>
        <button
          type='button'
          className={styles.btn}
          onClick={handleClickCancel}
        >
          {t('cancelBtn')}
        </button>
      </div>
    </form>
  );
}

export default EditUserForm;
