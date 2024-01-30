import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    const users = useSelector(state => state.user.users);

    return (
        <div className="user">

        </div>
    );
}

export default User;

