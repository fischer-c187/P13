import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import UserPresentation from '../../components/userPresentation/userPresentation';
import Transactions from '../../layouts/transactions/transactions';
import { selectUser } from '../../store/slice/authSlice';

import styles from './user.module.css';
import { useUpdateTitle } from '../../hook/useUpdateTitle';

function User() {
  const user = useSelector(selectUser);
  const { t } = useTranslation('userPage');

  useUpdateTitle(t('pageTitle'));

  return (
    <main className={styles.main}>
      <UserPresentation firstname={user.firstName} lastname={user.lastName}  />
      <Transactions />
    </main>
  );
}

export default User;
