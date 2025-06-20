import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Shop from './pages/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-full overflow-hidden'>
        <Navbar/>
        <Shop/>
      </div>
    </BrowserRouter>
  )
}

export default App