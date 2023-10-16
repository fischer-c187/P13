import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

/**
 * The Navigation component renders a navigation menu. It takes an object as a parameter
 * and iterates over its properties to generate menu links.
 * 
 * @param {Object} props - The component's props.
 * @param {Object} props.navigationItems - An object representing the navigation items.
 * @param {string} props.navigationItems[].icon - The FontAwesome class for the navigation item's icon.
 * @param {string} props.navigationItems[].link - The URL link for the navigation item.
 * @param {string} [props.navigationItems[].textKey] - The i18n key used to translate the text for the item.
 * @param {string} [props.navigationItems[].text] - The text to display if no i18n key is provided.
 * 
 * @returns {JSX.Element} The Navigation component.
 * 
 */
function Navigation({ navigationItems }) {
  const { t } = useTranslation('appLayout');

  return (
    <nav>
      <ul className={styles.navigation}>
        {Object.values(navigationItems).map((item, index) => (
          <li key={index}>
            {item?.icon && (
              <FontAwesomeIcon
                icon={item.icon}
                className={styles.navigation__icon}
              />
            )}
            <Link to={item.link} className={styles.navigation__link}>
              {item?.textKey ? t(`navigation.${item.textKey}`) : item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
