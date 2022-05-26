import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import Reactions from './Reactions';

const PostsList = () => {
  // invoke the useSelector
  const posts = useSelector(selectAllPosts);

  // order the posts from newest (top) to oldest (bottom)
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // render an article for each post
  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>
        <PostAuthor userId={post.userId} /> · <TimeAgo timestamp={post.date} />
      </p>
      <p>{post.content.substring(0, 100)}</p>
      <Reactions post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
