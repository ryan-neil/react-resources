import { configureStore } from '@reduxjs/toolkit';
// reducers
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

// configure the app store
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
