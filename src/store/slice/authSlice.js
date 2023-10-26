import { createSlice } from '@reduxjs/toolkit';
import { existingToken, removeToken } from '../../utils/token';

const initialState = {
  isAuth: existingToken(),
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = {};
      state.isAuth = false;
      removeToken();
    },
    login(state) {
      state.isAuth = true;
    },
    setUserInfo(state, action) {
      state.user = action.payload;
    },
  },
});

// Actions
export const { logout, setUserInfo, login } = authSlice.actions;

// Selectors
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUser = (state) => state.auth.user;

//reducer
export default authSlice.reducer;
