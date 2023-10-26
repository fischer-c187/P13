import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './error.module.css';
import { useUpdateTitle } from '../../hook/useUpdateTitle';


/**
 * Error Component
 * 
 * This component serves as a generic error message display. It uses `i18n` for internationalization.
 * 
 * Props:
 * @param {string} messageScope - The scope within the 'errorMessage' namespace to look for translations.
 * @param {string} [to='/'] - The path to navigate to when clicking the return link. Default is '/'.
 * 
 * @returns {JSX.Element} A JSX element containing the error title, message, and a return link if they exist in the translation file.
 */
function Error({ messageScope, to='/' }) {
  const { t, i18n } = useTranslation('errorMessage');

  useUpdateTitle(t(`${messageScope}.titlePage`));

  const title = i18n.exists(`errorMessage:${messageScope}.title`) 
    ? <h1 className={styles.title}>{t(`${messageScope}.title`)}</h1> 
    : null;
  const message = i18n.exists(`errorMessage:${messageScope}.message`)
    ? <p>{t(`${messageScope}.message`)}</p>
    : null;
  const link = i18n.exists(`errorMessage:${messageScope}.returnMessage`)
    ? <Link to={to} className={styles.link}>{t(`${messageScope}.returnMessage`)}</Link>
    :null;

  return (
    <main className={styles.container}>
      {title}
      {message}
      {link}
    </main>
  );
}

export default Error;
