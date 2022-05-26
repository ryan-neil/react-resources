import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onAddPost = () => {
    if (title && content) {
      // send the new post
      dispatch(postAdded(title, content, userId));

      // reset the inputs
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  // all input fields must be filled out to submit the form
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <div>Add a New Post</div>
      <form>
        <label htmlFor="post-title">
          Post Title:
          <input
            type="text"
            name="post-title"
            id="post-title"
            value={title}
            onChange={onTitleChanged}
          />
        </label>
        <label htmlFor="post-author">
          Author:
          <select id="post-author" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
          </select>
        </label>
        <label htmlFor="post-content">
          Post Content:
          <textarea
            name="post-content"
            id="post-content"
            value={content}
            onChange={onContentChanged}
          />
        </label>
        <button type="button" onClick={onAddPost} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
