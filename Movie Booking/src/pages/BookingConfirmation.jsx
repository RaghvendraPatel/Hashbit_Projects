import React from "react";
import { useLocation } from "react-router-dom";

export default function BookingConfirmation() {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="confirmation">
      <h2>🎉 Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {state?.name}</p>
      <p><strong>Email:</strong> {state?.email}</p>
      <p><strong>Mobile:</strong> {state?.mobile}</p>
      <p><strong>Movie ID:</strong> {state?.id}</p>
    </div>
  );
}