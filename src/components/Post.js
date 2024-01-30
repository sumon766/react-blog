import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../redux/actions/commentSlice";

const Post = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const users = useSelector((state) => state.user.users);
  const allComments = useSelector((state) => state.comment.comments);

  const post = posts.find((post) => post.title === title);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (!post) {
    return (
      <div className="loading">
        <h3>Loading post...</h3>
      </div>
    );
  }

  const getUserById = (userId) => users.find((user) => user.id === userId);
  const postComments = allComments.filter((comment) => comment.postId === post.id);

  return (
    <div className="single-post">
      <div className="post-title">
        <h2>{post.title}</h2>
        <h6>{getUserById(post.userId)?.name}</h6>
      </div>
      <div className="post-body">
        <p>{post.body}</p>
      </div>
      <div className="comments">
        <h3>Comments for this post</h3>
        {postComments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>{comment.body}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
