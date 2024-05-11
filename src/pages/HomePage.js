import React from 'react';
import '../styles/Homepage.css';
import SchoolList from '../component/SchoolMenu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs';
import ElementSchool from './ElementSchool';
import CategoryList from '../component/CategoryList';
import SlideContent from '../component/SlideContent';
import HightSchool from './HightSchool';
import Header from '../component/Header';
import Footer from '../component/Footer';
import JuniorHighSchool from './JuniorHighSchool';

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <div className="slide-content">
        <SlideContent />

      </div>

      <div className='aboutus'>
        <CategoryList />
      </div>
      <div className='ShowAllSchool' >
        <section className='hight-School'>
          <h1> Hight School</h1>
          <HightSchool />
        </section>
        <h1> Junior High School</h1>
        <section className='hight-School'>
          <JuniorHighSchool />
        </section>
        <section className='hight-School'>
          <h1> Element School</h1>
          <ElementSchool />
        </section>
      </div>
      <Routes>
        <Route element={<ContactUs />} path='/contacus' />
        <Route element={<allSchool />} Path="/allschool" />
      </Routes>
      <div className='footer'><Footer /></div>
      
    </div>
  );
}

export default HomePage;