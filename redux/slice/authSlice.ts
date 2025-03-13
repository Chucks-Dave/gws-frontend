import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  // If you also have a refresh token, you can include it here
  // refreshToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  // refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(
      state: { accessToken: string | null },
      action: PayloadAction<string | null>
    ) {
      state.accessToken = action.payload;
    },
    // setRefreshToken(state, action: PayloadAction<string | null>) {
    //   state.refreshToken = action.payload;
    // },
    clearAuthState(state) {
      state.accessToken = null;
      // state.refreshToken = null;
    },
  },
});

export const { setAccessToken, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
