import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postSlice';
import { fetchUsers } from '../redux/actions/userSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users || []);
  const posts = useSelector((state) => state.post.posts || []);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getUserById = (userId) => users.find((user) => user.id === userId);

  return (
    <div className="post-area">
      <div className="page-title">
        <h1>List of Posts</h1>
      </div>
      <div className="posts">
        {posts && posts.length > 0 ? posts.map((post) => (
          <div className="post" key={post.id}>
            {getUserById(post.userId)?.name}
            <br />
            {post.title}
            <br />
            {post.body}
            <br />
            <br />
          </div>
        )) : (
          <div className="loading">
            <h3>Loading posts</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
