import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetUserInfoQuery } from '../store/slice/apiSlice';
import {
  selectIsAuth,
  selectUser,
  setUserInfo,
} from '../store/slice/authSlice';

/**
 * Custom React hook for fetching and managing user information.
 *
 * @returns {boolean} - Returns true if the data is currently being loaded or fetched; false otherwise.
 */
function useFetchUserInfo() {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const userInfo = useGetUserInfoQuery(null, {
    skip: !isAuth && !Object.keys(user).length,
  });

  useEffect(() => {
    if (!Object.keys(user).length && userInfo.data) {
      dispatch(setUserInfo(userInfo.data));
    }
  }, [dispatch, user, userInfo.data]);

  return userInfo.isLoading || userInfo.isFetching;
}

export default useFetchUserInfo;
