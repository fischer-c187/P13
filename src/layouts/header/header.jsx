import { Link } from 'react-router-dom';

import { navigationUserConnected, navigationUserNotConnected } from '../../constants/navigation';
import Navigation from '../../components/navigation/navigation';
import generalAppInformation from '../../constants/general';

import styles from './header.module.css';

/**
 * The `Header` component renders the header of the application.
 * It includes a logo and navigation links.
 * 
 * @returns {JSX.Element} A JSX element representing the header.
 */
function Header() {
  const items = navigationUserNotConnected;

  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={generalAppInformation.logo} className={styles.header__logo} alt="logo click to return to the home page" />
        <h1 className='sr'>Argent Bank</h1>
      </Link>
      <Navigation navigationItems={items} />
    </header>
  );
}

export default Header;