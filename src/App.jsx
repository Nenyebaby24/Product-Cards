// App.jsx
import React from 'react';
import ProductCard from './ProductCard.jsx';
import Card from './Card.jsx';

import banyagwan from './assets/banyagwang.jpg';
import laz from './assets/Laz.jpg';
import sasserstube from './assets/Sasserstube.jpg';
import mypicture from './assets/mypicture.png';

import './ProductCard.css';
import './Card.css';

function App() {
  const handleBuy = (productName) => {
    alert(`You bought ${productName}!`);
  };


  return (
    <div className="App">

      {/* Product Cards Section */}
      <div className="ProductCard-Container">
        <ProductCard 
          img={banyagwan}
          alt="banyagwang"
          name="banyagwang"
          price="$5.50"
          description="Your healthy recipe"
          button="Buy Now"
          onBuy={handleBuy}
        />

        <ProductCard 
          img={laz}
          alt="Laz"
          name="Laz"
          price="$7.50"
          description="Your delicious meal"
          button="Buy Now"
          onBuy={handleBuy}
        />

        <ProductCard 
          img={sasserstube}
          alt="Sasserstube"
          name="Sasserstube"
          price="$10.50"
          description="Your healthy meal"
          button="Buy Now"
          onBuy={handleBuy}
        />
      </div>

      {/* Profile Card Section */}
      {/*
      <div className="Card-Container">
        <Card 
          img={mypicture}
          alt="my picture"
          name="Name: Chinenye Udo"
          location="Location: Abuja"
          position="Position: Front End Developer"
          skill="Skill: HTML, CSS, Bootstrap, JavaScript, React.js"
        />
      </div>  */}
    </div>
  );
}

export default App;
