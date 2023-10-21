import UserPresentation from '../../components/userPresentation/userPresentation';
import Transactions from '../../layouts/transactions/transactions';

import styles from './user.module.css';

function User() {
  return (
    <main className={styles.main}>
      <UserPresentation firstname='mm' lastname='tt' />
      <Transactions />
    </main>
  );
}

export default User;
