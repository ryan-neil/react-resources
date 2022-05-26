import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionIcons = {
  thumbsUp: '👍🏼',
  thumbsDown: '👎🏼',
  rocket: '🚀',
};

const Reactions = ({ post }) => {
  const dispatch = useDispatch();

  // loop through the reaction emoji icons object
  const reactionButtons = Object.entries(reactionIcons).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default Reactions;
