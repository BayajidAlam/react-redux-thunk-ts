import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Iuser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: Iuser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});


export default userSlice.reducer;
