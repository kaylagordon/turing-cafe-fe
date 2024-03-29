import React, { Component } from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationContainer = ({ reservations, cancelReservation }) => {
  const renderCards = () => {
    return reservations.map(reservation => {
      return <ReservationCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
        cancelReservation={cancelReservation}
      />
    })
  }

  return (
    <section className='reservation-container'>
      {renderCards()}
    </section>
  )
}

export default ReservationContainer;
