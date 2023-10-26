import { Link, useNavigate  } from 'react-router-dom';

import {
  navigationUserConnected,
  navigationUserNotConnected,
} from '../../constants/navigation';
import Navigation from '../../components/navigation/navigation';
import generalAppInformation from '../../constants/general';

import styles from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from '../../store/slice/authSlice';

/**
 * The `Header` component renders the header of the application.
 * It includes a logo and navigation links.
 *
 * @returns {JSX.Element} A JSX element representing the header.
 */
function Header() {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = isAuth
    ? navigationUserConnected(user.firstName, dispatch, navigate)
    : navigationUserNotConnected;

  return (
    <header className={styles.header}>
      <Link to='/'>
        <img
          src={generalAppInformation.logo}
          className={styles.header__logo}
          alt='logo click to return to the home page'
        />
        <h1 className='sr'>Argent Bank</h1>
      </Link>
      <Navigation navigationItems={items} />
    </header>
  );
}

export default Header;
