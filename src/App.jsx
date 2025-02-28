import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar';
import Home from './features/Home';
import { Outlet } from 'react-router-dom';
import Skills from './features/Skills';

function App() {
  return (
    <div>
      {/* <Navbar></Navbar>
      <Home></Home> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
