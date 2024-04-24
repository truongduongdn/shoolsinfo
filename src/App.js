import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import AllPage from './pages/AllPage';
import Contact from './pages/Contact';
import Header from './component/Header';
import './App.css'
import './AboutUs.css'

function App(props) {
  return (
    <div className='about'>
      <div className='header_navbar'>
        <header className='form_navbar row'>
          <Header />
        </header>
      </div>
      <div className='phan_container'>
        <div className='container_path row'>
          <Routes>
            <Route element={<HomePage />}
              path='/' />
            <Route element={<AllPage />}
              path='/allpage' />
            <Route element={<AboutUs />}
              path='/aboutus' />
            <Route element={<Contact />}
              path='/contact' />
          </Routes>
        </div>
      </div>
      <footer >

      </footer>
    </div>
  );
}

export default App;
