import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/actions/postSlice';

const User = () => {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const users = useSelector((state) => state.user.users);

  const user = users.find((user) => user.id === userId);

  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!user) {
    return (
      <div className="loading">
        <h3>Loading user...</h3>
      </div>
    );
  }

  return (
    <div className="user">
      <div className="user-details">
        <h2>{user.id}</h2>
        <h2>{user.name}</h2>
      </div>

      <div className="user-posts">
        <div className="">
          <h3>Posts by this user</h3>
        </div>

        {posts && posts.length < 0 ? (
          <div className="loading">
            <h3>Loading posts by this user...</h3>
          </div>
        ) : posts.map((post) => (
          <div className="post" key={post.id}>
            {post.title}
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
