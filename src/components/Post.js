import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../redux/actions/commentSlice";
import { deletePost } from "../redux/actions/postSlice";

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

  const navigate = useNavigate();
  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId))
    .then(() => {
      // Show a success message or perform any other action
      //alert("Post deleted successfully!");
      // Redirect to the posts page or any other desired route
      navigate("/");
    })
    .catch((error) => {
      // Handle error, if needed
    });
  };

  if (!post) {
    return (
      <div className="loading">
        <h3>Loading post...</h3>
      </div>
    );
  }

  const getUserById = (userId) => users.find((user) => user.id === userId);
  const postComments = allComments.filter(
    (comment) => comment.postId === post.id
  );

  return (
    <div className="single-post">
      <div className="post-title">
        <h2>{post.title}</h2>
        <h6>{getUserById(post.userId)?.name}</h6>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => handleDeletePost(post.id)}
        >
          Delete Post
        </button>
      </div>
      <div className="post-body">
        <p>{post.body}</p>
      </div>
      <div className="comments">
        <h3>Comments for this post</h3>
        {postComments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>
              <b>Commented by:</b> {comment.email}
            </p>
            <p>{comment.body}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
