import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Task from './task';

export default function Tasks() {
  const [data, setData] = useState([]);
  const [event, setEventData] = useState({}); // State for event data   
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First GET request
        const taskResponse = await axios.get(`http://127.0.0.1:5000/tasks/${id}`);
        console.log("Task Data:", taskResponse.data);
        setData(taskResponse.data); // Set task data
  
        // Second GET request
        const eventResponse = await axios.get(`http://127.0.0.1:5000/events_detail/${id}`); // Replace `eventId` with your variable
        console.log("Event Data:", eventResponse.data);
        setEventData(eventResponse.data); // Set event data (assuming you have a state for it)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchData();
  }, [id]); // Ensure to include `id` as a dependency



  return (
    <div className="section">
  <h3 className="title">Task Opens:</h3>

  {/* Event Detail Section */}
  <div className="event-detail">
    <img src={event.img} alt={`Event ${event.id}`} className="event-image" />
    <h2 className="event-title">Event ID: {event.id}</h2>
    <p className="event-description">{event.description}</p>
  </div>

  {/* Tasks Section */}
  <div className="columns">
    {data.map((item, index) => (
      <Task key={index} item={item} /> // Render a component for each item
    ))}
  </div>

  <style jsx>{`
      .event-detail {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0; /* Add margin top and bottom for spacing */
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .event-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .event-title {
        font-size: 1.5em;
        margin: 12px 0;
      }
      .event-description {
        font-size: 1em;
        color: #555;
      }
      .columns {
        display: flex;          /* Use flexbox for tasks */
        flex-wrap: wrap;       /* Allow wrapping if necessary */
        justify-content: space-around; /* Space tasks evenly */
        margin: 16px 0;       /* Add margin for separation from the event detail */
      }
      /* Optional: Add styles for each Task component */
      .task-item {
        margin: 8px;          /* Space between task items */
      }
  `}</style>
</div>

  );
};
