import './Card.css';



function Card(props) {
  return (
    <div className="Card">
      <img className="Card-image" src={props.img} alt={props.alt} />
      <h2 className="Card-name">{props.name}</h2>
      <p className="Card-location">{props.location}</p>
      <p className='Card-position'>{props.position}</p>
      <p className='Card-skill'>{props.skill}</p>
    </div>
  );
}

export default Card;
