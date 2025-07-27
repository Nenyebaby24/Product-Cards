import './ProductCard.css';
import './App.css';

function ProductCard(props) {
  return (
    <div className="ProductCard">
      <img className="ProductCard-image" src={props.img} alt={props.alt} />
      <h2 className="ProductCard-name">{props.name}</h2>
      <p className="ProductCard-price">{props.price}</p>
      <p className='ProductCard-description'>{props.description}</p>
      <button className='ProductCard-btn'>Buy Now</button>
    </div>
  );
}

export default ProductCard;
