import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookSeat = (props) => {
  const seatNumber = props.seatNo;
  const seatStatus = props.seatColor ? props.seatColor : 'seat-grey';
  const [movieInfo, setMovieInfo] = useState();
  const [bokingInfo, setBookingInfo] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/getMovieInfo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = { ...bokingInfo };
        newData.date = data[0].date;
        newData.time = data[0].time;
        setBookingInfo(newData);
      });
  }, []);

  const seatClickHandler = (event, seatNumber) => {
    event.stopPropagation();
    // const seatColor = document.querySelector(`.seat-${seatNumber}`).classList;
    // seatColor.map((colorChange) => colorChange.add('seat-black'));
    const newInfo = { ...bokingInfo };
    newInfo.NewSeat = seatNumber;
    setBookingInfo(newInfo);
  };

  console.log(bokingInfo);
  return (
    <div className='col-2 col-md-2'>
      <div
        className={`seat seat-${seatNumber} ${seatStatus}`}
        onClick={(e) => seatClickHandler(e, props.seatNo)}
      />
    </div>
  );
};

export default BookSeat;
