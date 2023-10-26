import { logout } from '../store/slice/authSlice';

export const navigationUserNotConnected = {
  signIn: {
    textKey: 'signIn',
    link: '/sign-in',
    icon: 'fa-solid fa-circle-user',
  },
};

export const navigationUserConnected = (name, dispatch, navigate) => ({
  user: {
    text: name,
    link: '/user',
    icon: 'fa-solid fa-circle-user',
  },
  signOut: {
    textKey: 'signOut',
    link: '/',
    icon: 'fa-solid fa-right-from-bracket',
    onClick: (event) => {
      event.preventDefault();
      dispatch(logout());
      navigate(event.target.getAttribute('href'));
    },
  },
});
