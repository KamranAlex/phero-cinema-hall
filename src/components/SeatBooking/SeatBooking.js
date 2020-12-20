import React from 'react';
import BookSeat from '../BookSeat/BookSeat';

const SeatBooking = () => {
  return (
    <div className='row'>
      Unoccupied : <BookSeat seatColor='seat-grey' />
      Occupied : <BookSeat seatColor='seat-black' />
    </div>
  );
};

export default SeatBooking;
