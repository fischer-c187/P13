import LoginForm from '../../components/loginForm/loginForm';

import styles from './signIn.module.css';

function SignIn() {
  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  );
}

export default SignIn;
