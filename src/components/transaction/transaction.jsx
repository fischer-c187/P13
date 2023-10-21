import { useTranslation } from 'react-i18next';

import { validTypeTransaction } from '../../utils/transaction';
import balanceTypeKey from '../../constants/transactionBalanceType';


import styles from './transaction.module.css';


/**
 * Transaction - A functional component to render transaction details.
 *
 * @function
 * @name Transaction
 * @param {Object} props - React default props.
 * @param {number} props.amount - The amount of the transaction.
 * @param {string} props.operationType - The type of transaction (deposit, withdrawal, etc.).
 * @throws Will throw an error if the specified transaction type does not exist.
 * @returns {JSX.Element} - React component to render transaction details.
 */
function Transaction({ amount, operationType }) {
  const { t } = useTranslation('userPage');

  if (!validTypeTransaction(operationType)) {
    throw new Error('The specified transaction type does not exist.');
  }

  return (
    <section className={styles.transaction}>
      <div>
        <h3 className={styles.title}>
          {t(`transactionType.${operationType}`)}
        </h3>
        <p className={styles.amount}>{`${t('currency')}${amount}`}</p>
        <p>{t(`transaction.${balanceTypeKey[operationType]}`)}</p>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} type='button'>
          {t('transaction.viewButton')}
        </button>
      </div>
    </section>
  );
}

export default Transaction;
