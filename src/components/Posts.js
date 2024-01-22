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
    <div>
      <h1>This is Posts Page.</h1>
    </div>
  );
}

export default Posts;
