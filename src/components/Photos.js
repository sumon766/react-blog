import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/actions/photoSlice";

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div className="photos-area">
      <div className="page-title">
        <h1>List of Photos</h1>
      </div>
      <div className="photos">
        {photos && photos.length > 0 ? photos.map((photo) => (
          <div className="photo" key={photo.id}>
            {photo.title}<br/>
            {photo.thumbnailUrl}
            <br/><br/>
          </div>
        )) : (
          <div className="loading">
            <h3>Loading photos...</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Photos;
