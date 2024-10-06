import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Tasks from './tasks';

export default function Event({item}) {
  const {id} = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/events_detail/${id}`) // Replace with your Flask endpoint
      .then((response) => {
        // console.log(response.data);
        setData(response.data); // Set the data received from Flask
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  console.log(data)

  
  return (
      <div>
        <h1>Event Details for ID:{id}</h1>
        {/* Render additional event details here based on the ID */}
        
        <Tasks />

      </div>
    );
  };