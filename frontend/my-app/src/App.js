import React, { useEffect, useState } from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';


import Events from './components/events';
import EventDetails from './components/event_details';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/events') // Replace with your Flask endpoint
      .then((response) => {
        // console.log(response.data);
        setData(response.data); // Set the data received from Flask
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <section className="hero is-primary">
          <div className="hero-body">
            <h1 className="title">HelpNow</h1>
            <h2 className="subtitle">The web app for volunteering</h2>
            <Link to="/events">Events</Link>
          </div>
        </section>

        <Routes>
          <Route path="/events" element={<Events />} /> {/* Event details route */}
          <Route path="/event/:id" element={<EventDetails />} /> {/* Event details route */}
        </Routes>
      </div>
    </>
  );
};
