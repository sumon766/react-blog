import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postSlice from "../redux/actions/postSlice";
import { fetchPosts } from "../redux/actions/postSlice";

const Posts = () => {
  

  return (
    <div>
      <h1>This is Posts Page.</h1>
    </div>
  );
}

export default Posts;
