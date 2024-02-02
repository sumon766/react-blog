import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/postSlice";

const NewPost = () => {
  const dispatch = useDispatch();
  const {loading, posts, error} = useSelector((state) => state.post);

  const [newPost, setNewPost] = useState({
    userId: 1,
    title: "",
    body: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userId = parseInt(document.getElementById('userId').value, 10);
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const postData = { userId, title, body };

    dispatch(createPost(postData));

    setNewPost({
        userId: 1,
        title: "",
        body: ""
    });
  }

  return (
    <div className="new-post">
      <div className="page-title">
        <h1>Create a new post</h1>
      </div>
      <div className="post-form">
        <form onSubmit={handleFormSubmit}>
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
          <button type="submit" class="btn btn-success">
            {loading ? "Submitting..." : "Submit"}
          </button>
          {loading && <p>Please wait...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!loading && !error && <p style={{ color: 'green' }}>Post submitted successfully!</p>}
          <br />
        </form>
      </div>
    </div>
  );
};

export default NewPost;
