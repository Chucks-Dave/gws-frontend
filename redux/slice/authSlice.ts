import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  access_Token: string | null;
  // If you also have a refresh token, you can include it here
  // refreshToken: string | null;
}

const initialState: AuthState = {
  access_Token: null,
  // refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(
      state: { access_Token: string | null },
      action: PayloadAction<string | null>
    ) {
      state.access_Token = action.payload;
    },
    // setRefreshToken(state, action: PayloadAction<string | null>) {
    //   state.refreshToken = action.payload;
    // },
    clearAuthState(state) {
      state.access_Token = null;
      // state.refreshToken = null;
    },
  },
});

export const { setAccessToken, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
