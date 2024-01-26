import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/actions/commentSlice";

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments);

    useEffect(() => {
        dispatch(fetchComments);
    }, dispatch);

    return (
        <div className="comments">
            <div className="comment">

            </div>
        </div>
    );
}

export default Comments;