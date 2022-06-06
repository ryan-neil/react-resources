import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

// define base url
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: 'idle', // Can be: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    // reducer function to handle the data that we submit
    postAdded: {
      reducer(state, action) {
        // we can use .push for state because of immer.js (https://immerjs.github.io/immer/)
        state.posts.push(action.payload); // payload is the form data we send and we push that to state
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            date: new Date().toISOString(),
            userId: userId,
            reactions: {
              thumbsUp: 0,
              thumbsDown: 0,
              rocket: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      // get the existing post from the state
      const existingPost = state.posts.find((post) => post.id === postId);

      // check if we found an existing post
      if (existingPost) {
        // normally this would mutate the state but because we're in the createSlice immer.js takes care of this for us
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// this ties the state to the slice and not the component
export const selectAllPosts = (state) => state.posts.posts;

// this is an automatically created action creator function
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
