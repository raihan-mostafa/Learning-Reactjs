import './App.css';
import Navbar from './componments/Navbar';
import TextForm from './componments/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtilities" aboutText="AboutUs"/>
      
      <div className="container">
      <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
