import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import EditUserForm from '../editUserForm/editUserForm';

import styles from './userPresentation.module.css';

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
          firstname={firstname}
          lastname={lastname}
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
