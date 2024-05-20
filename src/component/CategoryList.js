import React from 'react';
import '../styles/CategoryList.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import HightSchool from '../pages/HightSchool';
function CategoryList(props) {
    return (
        <div>
             <Routes>
        <Route path="../HighSchool" element={<HightSchool />} />
        <Route path="../JuniorHighSchool" element={<HightSchool />} />
        {/* Other routes here */}
      </Routes>
            <div className="row">
                <div className="col-sm">
                    <Link to="../ElementSchool">
                        <div className='category__list-item'>

                            <div className='category__list-item-img'>
                                <img src="../asset/Type_TieuHoc.jpg" className='title-image object-cover lazyLoad isLoaded'>
                                </img>
                            </div>
                            <div className='category__list-item-text'>
                                <h3 className='category__list-item-text-title'>Primary school</h3>
                                <p className='category__list-item-text-description'>1305 Primary school</p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="col-sm">
                    <Link to="../JuniorHighSchool">
                        <div className='category__list-item'>

                            <div className='category__list-item-img'>
                                <img src="../asset/Type_JuniorHighSchool.png" className='title-image object-cover lazyLoad isLoaded'>
                                </img>
                            </div>
                            <div className='category__list-item-text'>
                                <h3 className='category__list-item-text-title'>junior high school</h3>
                                <p className='category__list-item-text-description'>905 junior high school</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm">
                <Link to="../HightSchool">
                        <div className='category__list-item'>

                            <div className='category__list-item-img'>
                                <img src="../asset/Type_HighSchool.png" className='title-image object-cover lazyLoad isLoaded'>
                                </img>
                            </div>
                            <div className='category__list-item-text'>
                                <h3 className='category__list-item-text-title'>High school</h3>
                                <p className='category__list-item-text-description'>1305 high school</p>
                            </div>
                        </div>
                    </Link>



                </div>
        
            </div>
        </div >
    );
}

export default CategoryList;