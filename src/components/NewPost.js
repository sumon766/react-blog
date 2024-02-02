import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../redux/actions/postSlice';

const NewPost = () => {
  const dispatch = useDispatch();
  const { loading, successfulSubmission, error } = useSelector(
    (state) => state.post,
  );

  const [newPost, setNewPost] = useState({
    userId: '',
    title: '',
    body: '',
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
      title: '',
      body: '',
    });
  };

  return (
    <div className="new-post">
      <div className="page-title">
        <h1>Create a new post</h1>
      </div>
      <div className="post-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="userId">User ID (1-8)</label>
            <input
              type="number"
              className="form-control"
              id="userId"
              value={newPost.userId}
              onChange={(e) => setNewPost({
                ...newPost,
                userId: e.target.value,
              })}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="title">Post title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={newPost.title}
              onChange={(e) => setNewPost({
                ...newPost,
                title: e.target.value,
              })}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="body">Post body</label>
            <textarea
              className="form-control"
              rows="5"
              id="body"
              value={newPost.body}
              onChange={(e) => setNewPost({
                ...newPost,
                body: e.target.value,
              })}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {loading && <p>Please wait...</p>}
          {error && (
          <p style={{ color: 'red' }}>
            Error:
            {error}
          </p>
          )}
          {successfulSubmission && !loading && !error && (
            <p style={{ color: 'green' }}>Post submitted successfully!</p>
          )}
          <br />
        </form>
      </div>
    </div>
  );
};

export default NewPost;
