import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/actions/photoSlice';

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo.photos);
  const loading = useSelector((state) => state.photo.loading);

  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 60;

  useEffect(() => {
    dispatch(fetchPhotos({ _page: currentPage, _limit: photosPerPage }));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  return (
    <div className="photos-area">
      <div className="page-title">
        <h1>List of Photos</h1>
      </div>
      <div className="photos">
        {loading ? (
          <div className="loading">
            <h3>Loading photos...</h3>
          </div>
        ) : (
          <>
            <ul>
              {photos
                .slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage)
                .map((photo) => (
                  <div className="photo" key={photo.id}>
                    {photo.title}
                    <br />
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <br />
                    <br />
                  </div>
                ))}
            </ul>
            <div>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <span>{` Page ${currentPage} of ${totalPages} `}</span>
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next Page
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Photos;
