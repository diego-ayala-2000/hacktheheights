export default function Event({item}) {

   console.log(item)
   return (
      <div className="column is-one-third">
        <div className="box">
          
          <h1>{item.name}</h1>  {/* Display the event name */}
          <h2>{item.date}</h2>  {/* Display the event date */}
          <h3>{item.location}</h3>  {/* Display the event location */}
          <p>{item.description}</p>  {/* Display the event description */}
        </div>
      </div>
    );
  };