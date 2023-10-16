export const navigationUserNotConnected = {
  signIn: {
    textKey: 'signIn',
    link: '/sign-in',
    icon: 'fa-solid fa-circle-user',
  },
};

export const navigationUserConnected = (name) => ({
  user: {
    text: name,
    link: '/user',
    icon: 'fa-solid fa-circle-user',
  },
  signOut: {
    textKey: 'signOut',
    link: '/',
    icon: 'fa-solid fa-right-from-bracket',
  },
});
