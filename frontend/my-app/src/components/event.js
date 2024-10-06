import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../css/Event_style.css';
export default function Event({item}) {

  const eventStyle = {
       backgroundImage: `url(${item.image})`,  // Use the image from item
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '200px',  // Set the height based on preference
       width: '100%',    // Ensure the image covers full width
    };

   console.log(item)
   return (
      <Link to={`/event/${item.id}`} className="column is-one-third">
         {/* Display the event image */}
           <div style={eventStyle}></div>
          
           {/* Event details */}
           <h1 className="event-name">{item.name}</h1>  {/* Display the event name */}
            <h2 className="event-date">{item.date}</h2>  {/* Display the event date */}
            <h3 className="event-location">{item.location}</h3>  {/* Display the event location */}
            <p className="event-description">{item.description}</p>  {/* Display the event description */}
            
            {/* Additional information */}
            <p className="event-volunteers"><strong>Volunteers Needed:</strong> {item.volunteers_needed}</p>
            <p className="event-volunteers"><strong>Volunteers Registered:</strong> {item.volunteers_registered}</p>
            <p className="event-status"><strong>Status:</strong> {item.status}</p>  {/* Display the event status */}
            <progress class="progress is-info" value={(item.volunteers_registered/item.volunteers_needed)*100} max="100">
  45%
</progress>
    </Link>
    );
  };

