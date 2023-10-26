import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/loginForm/loginForm';

import styles from './signIn.module.css';
import { useUpdateTitle } from '../../hook/useUpdateTitle';

function SignIn() {
  const { t } = useTranslation('loginPage');

  useUpdateTitle(t('pageTitle'));

  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  );
}

export default SignIn;
