import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = () => {
    const {title} = useParams();
    const posts = useSelector()
}

export default Post;