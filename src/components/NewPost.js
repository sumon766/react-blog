import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/postSlice";

const NewPost = () => {
  const dispatch = useDispatch();
  const {loading, posts, error} = useSelector((state) => state.posts);

  const [newPost, setNewPost] = useState({
    userId: 1,
    title: "",
    body: ""
  });

  const handleFormSubmit = () => {

  }

  return (
    <div className="new-post">
      <div className="page-title">
        <h1>Create a new post</h1>
      </div>
      <div className="post-form">
        <form action="" method="POST">
          <div class="form-group">
            <label for="userId">User ID (1-8)</label>
            <input type="number" class="form-control" id="userId" />
          </div>
          <br />
          <div class="form-group">
            <label for="title">Post title</label>
            <input type="text" class="form-control" id="title" />
          </div>
          <br />
          <div class="form-group">
            <label for="body">Post body</label>
            <textarea class="form-control" rows="5" id="body"></textarea>
          </div>
          <br />
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
