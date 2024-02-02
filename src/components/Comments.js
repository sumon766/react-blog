import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/actions/commentSlice';

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="comments">
      {comments && comments.length > 0 ? comments.map((comment) => (
        <div className="comment" key={comment.id}>
          {comment.name}
          <br />
          {comment.email}
          <br />
          {comment.body}
          <br />
          <br />
        </div>
      )) : (
        <div className="loading">
          <h3>Loading comments...</h3>
        </div>
      )}
    </div>
  );
};

export default Comments;
