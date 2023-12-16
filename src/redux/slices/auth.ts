import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  uset: null,
  token: null,
  refreshToken: null
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    resetAuth: (state, _: PayloadAction<IAuthState>) => {
      state = initialState;
      return state;
    }
  }
});
