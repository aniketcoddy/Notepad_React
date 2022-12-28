
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <div>
      <Navbar/>
    </div>
    <Routes>
          <Route element={<About/>} exact path="/about"/>
          <Route element={<Textform heading = "Enter the text here"/>} exact path="/"/> 
        </Routes>
    <div>
    </div>
    </Router>

    </>
  );
}
export default App; 