import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import style from '../styles/catolog.module.css';
import BoxSearch from '../component/BoxSearch';
import ConElementSchool from '../component/ConElementSchool';
import ConJuniorHighSchool from '../component/ConJuniorHighSchool';
import ConHightSchool from '../component/ConHightSchool';
import { NavLink } from 'react-router-dom';

function AllSchool(props) {
  const [activeTab, setActiveTab] = useState(0); 

  const handleTabClick = (index) => {
    setActiveTab(index); 
  };
  return (

    <>
      <div>
        <Header />
        <div className={style.sub_banner}>
          <div className={style.introabouttype}>
            <p className={style.titleIntroType}> FIND SUITABLE SCHOOLS AND CENTERS THE FASTEST</p>
            <p className={style.SubtitleIntroType}> List of detailed reviews of +100 private, bilingual, public, and international high schools with tuition from only 1 million VND</p>
            <BoxSearch />
          </div>
        </div>
        <div className={style.containertab}>
          <ul className={style.tabs}>

            {['Element School', 'Junior  School', 'High School'].map((tab, index) => (
              <li
                key={index}
                className={index === activeTab ? style.active : ''} // Apply active class conditionally
                onClick={() => handleTabClick(index)} // Handle tab click
              >
                <a href="#">{tab}</a>
              </li>
            ))}
          </ul>


          <div className={style.tabcontainer}>
            {activeTab == 0 && <div><ConElementSchool /></div>}
            {activeTab == 1 && <div><ConJuniorHighSchool /></div>}
            {activeTab == 2 && <div><ConHightSchool /></div>}



            {/*  <ul className={style.tabs}>
              <li className={activeTab === 'ElementSchool' ? 'active' : ''}><NavLink to='#' onClick={() => handleTabChange('ElementSchool')}>Element School</NavLink></li>
              <li className={activeTab === 'JuniorHighSchool' ? 'active' : ''}><NavLink to='#' onClick={() => handleTabChange('JuniorHighSchool')}>Junior  School</NavLink></li>
              <li className={activeTab === 'HightSchool' ? 'active' : ''}><NavLink to='#' onClick={() => handleTabChange('HightSchool')}>High School</NavLink></li>
            </ul>
            <div className={style.tabcontent}>
              {activeTab === 'ElementSchool' && <ConElementSchool />}
              {activeTab === 'JuniorHighSchool' && <ConJuniorHighSchool />}
              {activeTab === 'HightSchool' && <ConHightSchool />}
            </div>*/}
          </div>
        </div>
        <div className='footer'><Footer /></div>
      </div>
    </>
  );
}

export default AllSchool;