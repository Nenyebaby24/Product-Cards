import Card from './Card.jsx';
import mypicture from './assets/mypicture.png'
import './Card.css';


function App() {
  return (
     <div className='Card-Container'>
    <Card 
   img={mypicture}
   alt="my picture"
   name="name: Chinenye Udo"
   location="location: Abuja"
   position="position: Front End Developer"
   skill="skill: HTML CSS Bootstrap Javascript React Js"
 />
 </div>
 
  );
}

export default App;




