import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="post-area">
      <div className="page-title">
        <h1>List of Posts</h1>
      </div>
      <div className="posts">
        {posts && posts.length > 0 ? posts.map((post) => (
          <div className="post">
            {post.id} <br/>
            {post.userId}<br/>
            {post.title}<br/>
            {post.body}
          </div>
        )) : (
          <div className="loading">
            <h3>Loading posts</h3>
          </div>
        )}
      </div>
    </div>  
  );
}

export default Posts;
