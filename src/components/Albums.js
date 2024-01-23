import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../redux/actions/albumSlice";
import { fetchUsers } from "../redux/actions/userSlice";

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((store) => store.album.albums);
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId);
  }

  return (
    <div className="albums">
      <div className="page-title">
        <h1>This is the Albums Page</h1>
      </div>
      {albums && albums.length > 0 ? albums.map((album) => (
        <div className="album">
          <p><b>User Name: </b>{getUserById(album.userId)?.name}</p>
          <p><b>Album Title: </b>{album.title}</p>
          <br/><br/>
        </div>
      )) : (
        <div className="loading">
          <h2>Loading albums...</h2>
        </div>
      )}
    </div>
  );
}

export default Albums;
