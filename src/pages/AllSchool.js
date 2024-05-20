import React from 'react';
import JuniorHighSchool from './JuniorHighSchool';
import HightSchool from './HightSchool';
import Header from '../component/Header';
import ElementSchool from './ElementSchool';
import { Route, Routes } from 'react-router-dom';
import Footer from '../component/Footer';
import ContactPage from './ContactPage';

function AllSchool(props) {
    return (
        <div>
            <div className="App">
      <Header />
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
        <Route element={<ContactPage />} path='/ContactPage' />
        <Route element={<allSchool />} Path="/allschool" />
      </Routes>
      <div className='footer'><Footer /></div>
      
    </div>
        </div>
    );
}

export default AllSchool;