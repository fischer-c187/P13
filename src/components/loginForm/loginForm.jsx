import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import InputField from '../inputField/inputField';
import CheckboxField from '../checkboxField/checkboxField';
import { useLazyGetTokenQuery } from '../../store/slice/apiSlice';
import { setTokenInStorage } from '../../utils/token';
import { login, selectIsAuth } from '../../store/slice/authSlice';
import ErrorForm from '../errorForm/errorForm';

import styles from './loginForm.module.css';


const initialState = {
  username: '',
  password: '',
  remember: false,
};

/**
 * Provides a form for user authentication, including fields for username, password, and an optional "remember me" checkbox.
 * 
 * 
 * This component handles user login by capturing the username and password,
 * invoking a query to get a token, and then dispatching actions to update the Redux state.
 * The component also makes use of various hooks for state management and side-effects.
 * It employs i18n for internationalization and utilizes FontAwesome icons for improved UX.
 * 
 * Upon successful login, it navigates to the user's homepage. 
 * In case of an error, an error message is displayed.
 * 
 */
function LoginForm() {
  const [user, setUser] = useState(initialState);
  const { t } = useTranslation('loginPage');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [getToken, getTokenResult] = useLazyGetTokenQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (getTokenResult.isSuccess) {
      dispatch(login());
      setTokenInStorage(getTokenResult.data, user.remember);
    }
  }, [getTokenResult.isSuccess, getTokenResult.data, user.remember, dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate('/user');
    }
  }, [isAuth, navigate]);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setUser((previousState) => ({
      ...previousState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getToken({
      email: user.username,
      password: user.password,
    });
  };

  return (
    <section className={styles.containerForm}>
      <FontAwesomeIcon className={styles.icon} icon='fa-solid fa-circle-user' />
      <h1 className={styles.title}>{t('title')}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {getTokenResult.isError && (
          <ErrorForm errorText={t(`errors.${getTokenResult.error.errorKey}`)} />
        )}
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
          type='password'
        />

        <CheckboxField
          name='remember'
          label={t('labelRememberMe')}
          handleChange={handleChange}
          checked={user.remember}
        />

        <button className={styles.btn} type='submit' disabled={getTokenResult.isFetching}>
          {getTokenResult.isFetching ? 'loading...' : t('buttonText')}
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
