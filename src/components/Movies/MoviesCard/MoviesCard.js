import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.css';

const MoviesCard = ({ newMovie }) => {
  const history = useHistory();
  const handleBookShow = (id) => {
    history.push(`/seatBook/${id}`);
  };
  return (
    <div className='col-md-3'>
      <div className='card movie-card mt-4'>
        <img
          src={`data:image/png;base64,${newMovie.image.img}`}
          className='card-img-top'
          alt='...'
        />

        <button
          onClick={() => {
            handleBookShow(newMovie._id);
          }}
          className='btn btn-success btn-join'
        >
          <p style={{ fontSize: '18px', color: '#b10466', marginBottom: '0' }}>
            {newMovie.title}
          </p>
          Show start at: <span className='text-warning'>{newMovie.time}</span>
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;
