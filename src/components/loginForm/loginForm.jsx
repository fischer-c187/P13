import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import InputField from '../inputField/inputField';
import CheckboxField from '../checkboxField/checkboxField';

import styles from './loginForm.module.css';

const initialState = {
  username: '',
  password: '',
  remember: false,
};

function LoginForm() {
  const [user, setUser] = useState(initialState);
  const { t } = useTranslation('loginPage');

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setUser((previousState) => ({
      ...previousState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section className={styles.containerForm}>
      <FontAwesomeIcon className={styles.icon} icon='fa-solid fa-circle-user' />
      <h1 className={styles.title}>{t('title')}</h1>
      <form className={styles.form}>
        <InputField
          name='username'
          label={t('labelUsername')}
          handleChange={handleChange}
          value={user.username}
        />

        <InputField
          name='password'
          label={t('labelPassword')}
          handleChange={handleChange}
          value={user.password}
        />

        <CheckboxField
          name='remember'
          label={t('labelRememberMe')}
          handleChange={handleChange}
          checked={user.remember}
        />

        <button className={styles.btn} type='submit'>
          {t('buttonText')}
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
