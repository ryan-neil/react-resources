import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Katie Neil' },
  { id: 2, name: 'Ryan Neil' },
  { id: 3, name: 'Luke Skywalker' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
