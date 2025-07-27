import ProductCard from './ProductCard.jsx';

import banyagwang from './assets/banyagwang.jpg';
import Laz from './assets/Laz.jpg';
import Sasserstube from './assets/Sasserstube.jpg';
import './App.css';

function App() {
  return (
   <div className="product-container">
    <ProductCard 
   img={banyagwang}
   alt="banyagwand"
   name="banyagwang"
   price="$5.50"
   description="Your healthy recipe"
   btn="Buy Now"
 />
 <ProductCard 
   img={Laz}
   alt="Laz"
   name="Laz"
   price="$7.50"
   description="Your delicious meal"
   btn="Buy Now"
 />
 <ProductCard 
   img={Sasserstube}
   alt="Sasserstube"
  name="banyagwang"
   price="$10.50"
   description="Your healthy meal"
   btn="Buy Now"
 />
 </div>
  );
}

export default App;




