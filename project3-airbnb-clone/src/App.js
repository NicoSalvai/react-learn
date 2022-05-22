import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className="carrousel">
          <Card />
          <Card />
        </div>
    </div>
  );
}

export default App;
