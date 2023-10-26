import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import EditUserForm from '../editUserForm/editUserForm';

import styles from './userPresentation.module.css';

/**
 * A header component displaying a welcome message and the user's name, 
 * along with an "Edit" button that toggles an inline edit form.
 * 
 * @param {string} firstname - The first name of the user
 * @param {string} lastname - The last name of the user
 * 
 */
function UserPresentation({ firstname, lastname }) {
  const { t } = useTranslation('userPage');
  const [editMode, setEditMode] = useState(false);

  const handleClickEditBtn = () => {
    setEditMode((previousState) => !previousState);
  };

  return (
    <header className={styles.header}>
      <h1>
        {t('welcomeMessage')}
        <br />
        {!editMode && `${firstname} ${lastname}!`}
      </h1>
      {editMode && (
        <EditUserForm
          firstName={firstname}
          lastName={lastname}
          handleClickCancel={handleClickEditBtn}
        />
      )}
      {!editMode && (
        <button
          type='button'
          onClick={handleClickEditBtn}
          className={styles.btn}
        >
          {t('editBtn')}
        </button>
      )}
    </header>
  );
}

export default UserPresentation;
