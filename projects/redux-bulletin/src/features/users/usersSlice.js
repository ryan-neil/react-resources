import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Katie Neil' },
  { id: '1', name: 'Ryan Neil' },
  { id: '2', name: 'Luke Skywalker' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
