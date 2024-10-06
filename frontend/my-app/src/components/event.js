import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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
           <h1>{item.name}</h1>  {/* Display the event name */}
           <h2>{item.date}</h2>  {/* Display the event date */}
           <h3>{item.location}</h3>  {/* Display the event location */}
           <p>{item.description}</p>  {/* Display the event description */}
          
           {/* Additional information */}
           <p><strong>Volunteers Needed:</strong> {item.volunteers_needed}</p>
           <p><strong>Volunteers Registered:</strong> {item.volunteers_registered}</p>
           <p><strong>Status:</strong> {item.status}</p>  {/* Display the event status */}
    </Link>
    );
  };

  // export default function Event({ item }) {
  //   const eventStyle = {
  //     backgroundImage: `url(${item.image})`,  // Use the image from item
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     height: '200px',  // Set the height based on preference
  //     width: '100%',    // Ensure the image covers full width
  //   };
  
  //   return (
  //     <div className="column is-one-third">
  //       <div className="box">
          
  //         {/* Display the event image */}
  //         <div style={eventStyle}></div>
          
  //         {/* Event details */}
  //         <h1>{item.name}</h1>  {/* Display the event name */}
  //         <h2>{item.date}</h2>  {/* Display the event date */}
  //         <h3>{item.location}</h3>  {/* Display the event location */}
  //         <p>{item.description}</p>  {/* Display the event description */}
          
  //         {/* Additional information */}
  //         <p><strong>Volunteers Needed:</strong> {item.volunteers_needed}</p>
  //         <p><strong>Volunteers Registered:</strong> {item.volunteers_registered}</p>
  //         <p><strong>Status:</strong> {item.status}</p>  {/* Display the event status */}
  //       </div>
  //     </div>
  //   );
  // }