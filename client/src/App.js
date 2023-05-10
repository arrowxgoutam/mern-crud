import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alluser' element={<AllUser/>} />
        <Route path='/adduser' element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
