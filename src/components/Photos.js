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
    <h1>This is Photos page</h1>
  );
}

export default Photos;
