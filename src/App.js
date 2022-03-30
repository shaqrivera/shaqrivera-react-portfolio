import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Resume from './component/Resume/Resume';
import Skills from './component/Skills/Skills';
import Work from './component/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
