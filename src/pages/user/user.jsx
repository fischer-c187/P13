import { useSelector } from 'react-redux';
import UserPresentation from '../../components/userPresentation/userPresentation';
import Transactions from '../../layouts/transactions/transactions';

import styles from './user.module.css';
import { selectUser } from '../../store/slice/authSlice';

function User() {
  const user = useSelector(selectUser);

  return (
    <main className={styles.main}>
      <UserPresentation firstname={user.firstName} lastname={user.lastName}  />
      <Transactions />
    </main>
  );
}

export default User;
