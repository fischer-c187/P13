import { useTranslation } from 'react-i18next';
import style from './footer.module.css';

/**
 * The Footer component renders the footer section of the website, displaying
 * copyright information. It uses the 'appLayout' namespace from i18n for translations.
 *
 * @returns {JSX.Element} The Footer component.
 */
function Footer() {
  const { t } = useTranslation('appLayout');

  return (
    <footer className={style.footer}>
      <p>{t('footer.copyright')}</p>
    </footer>
  );
}

export default Footer;
