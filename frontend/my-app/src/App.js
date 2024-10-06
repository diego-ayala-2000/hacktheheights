import Event from './components/event'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/events')  // Replace with your Flask endpoint
      .then(response => {
        //console.log(response.data);
        setData(response.data);  // Set the data received from Flask
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);


  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">HelpNow</h1>
          <h2 className="subtitle">The web app for voluntering</h2>
        </div>
      </section>

      <div className="section">
        <h3 className="title">My Features</h3>
        <div className="columns">
        {data.map((item, index) => (
          <Event key={index} item={item} />  // Render a component for each item
        ))}
        </div>
      </div>
    </div>
  );
}

