import Transaction from '../../components/transaction/transaction';

import ErrorBoundary from '../../error/errorBoundary';
import TransactionError from '../../components/transaction/transactionError';

import fakeTransactions from '../../constants/fakeTransactions';
import styles from './transactions.module.css';

/**
 * Transactions component that renders a list of Transaction components.
 * Wraps each Transaction component in an ErrorBoundary to handle errors.
 *
 * The `fallback` prop for the ErrorBoundary specifies what to render in case of an error (here, a `TransactionError` component).
 * 
 * @returns {JSX.Element} - A React element that contains a list of Transaction components wrapped in an ErrorBoundary
 */
function Transactions() {
  return (
    <div className={styles.transactionWrapper}>
      {fakeTransactions.map((transaction) => (
        <ErrorBoundary fallback={<TransactionError />} key={transaction.id}>
          <Transaction
            amount={transaction.amount}
            operationType={transaction.transactionType}
          />
        </ErrorBoundary>
      ))}
    </div>
  );
}

export default Transactions;
