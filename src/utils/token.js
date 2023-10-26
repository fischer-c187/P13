const tokenKey = 'userToken';

export function existingToken() {
  return !!(
    localStorage.getItem(tokenKey) ||
    sessionStorage.getItem(tokenKey) ||
    null
  );
}

export function getTokenInLocalStorage() {
  return (
    localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey) || null
  );
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
  sessionStorage.removeItem(tokenKey);
}

function addTokenToLocalStorage(token) {
  localStorage.setItem(tokenKey, token);
}

function addTokenToSessionStorage(token) {
  sessionStorage.setItem(tokenKey, token);
}

export function setTokenInStorage(token, rememberMe) {
  if (rememberMe) {
    addTokenToLocalStorage(token);
  } else {
    addTokenToSessionStorage(token);
  }
}
