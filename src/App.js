import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Rout></Rout>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
