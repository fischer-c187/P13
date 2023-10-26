import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import InputField from '../inputField/inputField';
import ErrorForm from '../errorForm/errorForm';
import { useUpdateUserMutation } from '../../store/slice/apiSlice';
import { setUserInfo } from '../../store/slice/authSlice';

import styles from './editUserForm.module.css';

/**
 * EditUserForm - A form component for editing a user's first and last name.
 *
 * This component provides input fields for editing the user's first and last name.
 * It also handles form submission and cancellation.
 * Upon successful update, it dispatches the new user info to the Redux store and triggers a cancellation function.
 *
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.firstName - The current first name of the user.
 * @param {string} props.lastName - The current last name of the user.
 * @param {Function} props.handleClickCancel - Function to handle the cancellation of the edit.
 *
 */
function EditUserForm({ firstName, lastName, handleClickCancel }) {
  const { t } = useTranslation('userPage');
  const [updateUser, updateResult] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  useEffect(() => {
    if (updateResult.isSuccess) {
      dispatch(setUserInfo(user));
      handleClickCancel();
    }
  }, [updateResult.isSuccess]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmitEditUser = (event) => {
    event.preventDefault();
    if (user.firstName !== firstName || user.lastName !== lastName) {
      updateUser(user);
    } else {
      handleClickCancel();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitEditUser}>
      {updateResult.isError && (
        <div className={styles.errorWrapper}>
          <ErrorForm errorText={`errors.${updateResult.error.errorKey}`} />
        </div>
      )}
      <div className={styles.inputContainer}>
        <InputField
          name='firstName'
          placeholder={firstName}
          value={user.firstName}
          handleChange={handleChange}
        />
        <InputField
          name='lastName'
          placeholder={lastName}
          value={user.lastName}
          handleChange={handleChange}
        />
      </div>

      <div className={styles.btnContainer}>
        <button
          type='submit'
          className={styles.btn}
          disabled={updateResult.isLoading}
        >
          {t('saveBtn')}
        </button>
        <button
          type='button'
          className={styles.btn}
          onClick={handleClickCancel}
        >
          {t('cancelBtn')}
        </button>
      </div>
    </form>
  );
}

export default EditUserForm;
