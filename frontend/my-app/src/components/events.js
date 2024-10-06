import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Event from './event';

export default function Events() {
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
        <div className="section">
          <h3 className="title">Open Events:</h3>
          <div className="columns">
            {data.map((item, index) => (
              <Event key={index} item={item} /> // Render a component for each item
            ))}
          </div>
        </div>
  );
};
