import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../css/Event_style.css';

export default function Event({ item }) {
  const eventStyle = {
    backgroundImage: `url(${item.img})`,  // Use the image from item.img
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',  // Set the height based on preference
    width: '100%',    // Ensure the image covers full width
  };

  console.log(item);
  
  return (
    <Link to={`/event/${item.id}`} className="column is-one-third">
      {/* Display the event image */}
      <div style={eventStyle}></div>
      
      {/* Event details */}
      <h1 className="task-name">{item.task_name}</h1>  {/* Display the task name */}
      <h2 className="task-type">{item.task_type}</h2>  {/* Display the task type */}
      <p className="task-description">{item.description}</p>  {/* Display the task description */}

      {/* Additional information */}
      <p className="event-id"><strong>Event ID:</strong> {item.event_id}</p>  {/* Display the event ID */}
    </Link>
  );
};