import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage'
import CatalogSchool from './pages/CatalogSchool';
import ReviewDetailPage from './pages/ReviewDetailPage';
import Footer from './component/Footer';
import JuniorHighSchool from './pages/JuniorHighSchool';
import ElementSchool from './pages/ElementSchool';
import HightSchool from './pages/HightSchool';
import './App.css';
import './styles/AboutUs.css';
import BoxSearch from './component/BoxSearch';
import NewsPage from './pages/News-Page/NewsPage';
import NewsDetail from './pages/News-Page/NewsDetail';
import TestPage from './pages/TestPage';
import AllSchool from './pages/AllSchool';
function App(props) {
  return (
    <div className='about'>
      {/* <div className='header_navbar'>
       
      </div> */}
      <div className='_container'>
        <div className='container_path row'>
          <Routes>
            <Route element={<HomePage />}
              path='/' />
        
            <Route element={<AboutUs />}
              path='/aboutus' />
            
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/CatalogSchool" element={<CatalogSchool />} />
            <Route path="/ReviewDetailPage" element={<ReviewDetailPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/AllSchool" element={<AllSchool />} />
            <Route path="/ElementSchool" element={<ElementSchool />} />
            <Route path="/HightSchool" element={<HightSchool />} />
            <Route path="/JuniorHighSchool" element={<JuniorHighSchool />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/NewsPage" element={<NewsPage />} />
            <Route path="/NewsDetail" element={<NewsDetail />} />
            <Route path='/BoxSearch' element ={<BoxSearch />} />
            <Route path='/TestPage' element ={<TestPage />} />
          </Routes>
        </div>
      </div>
      <footer >

      </footer>
    </div>
  );
}

export default App;
