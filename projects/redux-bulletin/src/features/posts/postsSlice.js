import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    title: 'Learning Redux Toolkit',
    content: 'I have always wanted to learn Redux. Let us do that now!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      rocket: 0,
    },
  },
  {
    id: 2,
    title: 'Redux Toolkit vs. useReducer',
    content:
      'Let us look at the similarities of Redux and the built in React hook, useReducer.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      rocket: 0,
    },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    // reducer function to handle the data that we submit
    postAdded: {
      reducer(state, action) {
        // we can use .push for state because of immer.js (https://immerjs.github.io/immer/)
        state.push(action.payload); // payload is the form data we send and we push that to state
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
      const existingPost = state.find((post) => post.id === postId);

      // check if we found an existing post
      if (existingPost) {
        // normally this would mutate the state but because we're in the createSlice immer.js takes care of this for us
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// this ties the state to the slice and not the component
export const selectAllPosts = (state) => state.posts;

// this is an automatically created action creator function
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
