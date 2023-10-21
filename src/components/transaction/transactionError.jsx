import styles from './transaction.module.css';


function TransactionError(){
  return (
    <section className={styles.transaction}>
      <h3 className={styles.errorTitle}>Error in Transaction</h3>
      <p className={styles.errorMessage}>The specified transaction type does not exist.</p>
    </section>
  );
}

export default TransactionError;