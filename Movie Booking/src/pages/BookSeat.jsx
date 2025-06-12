import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookSeat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", {
      state: {
        name,
        email,
        mobile,
        id,
      },
    });
  };

  return (
    <div className="form-container">
      <h2>Book Seat for Movie {id}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}