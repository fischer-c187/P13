const typeTransaction = [
  'creditCard',
  'saving',
  'checking'
];

export function validTypeTransaction(type) {
  return typeTransaction.includes(type);
}