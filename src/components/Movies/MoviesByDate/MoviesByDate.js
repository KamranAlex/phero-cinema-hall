import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesByDate = () => {
  const [movies, setMovies] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return year + '-' + month + '-' + dt;
  };

  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  const filteredMovies = movies.filter((flMovies) => {
    return formatDate(selectedDate) === flMovies.date;
  });
  console.log(filteredMovies.title);
  return (
    <div className='row m-2'>
      <div className='col-md-4'>
        <h2 className='mt-2 mb-1 text-warning'>Pick a Date:</h2>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className='col-md-8'>
        {filteredMovies.length ? (
          <>
            <h4 className='text-center text-info'>
              There are {filteredMovies.length} movies on{' '}
              <span className='text-success'>
                {selectedDate.toDateString()}
              </span>
            </h4>
            <h5 className='text-center text-danger'>Please select a movie</h5>
            <div className='row'>
              {filteredMovies.map((movie) => (
                <MoviesCard key={movie._id} newMovie={movie}></MoviesCard>
              ))}
            </div>
          </>
        ) : (
          <h4>
            There are no movies On{' '}
            <span className='text-success'>{selectedDate.toDateString()}</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default MoviesByDate;
