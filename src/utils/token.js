export function existingToken() {
  return !!(
    localStorage.getItem('userToken') ||
    sessionStorage.getItem('userToken') ||
    null
  );
}

export function getTokenInLocalStorage() {
  return (
    localStorage.getItem('userToken') ||
    sessionStorage.getItem('userToken') ||
    null
  );
}

export function removeToken() {
  localStorage.removeItem('userToken');
  sessionStorage.removeItem('userToken');
}