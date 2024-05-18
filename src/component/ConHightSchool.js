import React from 'react';
import style from '../styles/catolog.module.css';
import BoxSearch from './BoxSearch';
import { Link } from 'react-router-dom';
import '../styles/root.module.css';

function ConHightSchool(props) {
    return (

        <div className={style.container} >

            <div className={style.leftContainer}>
                {/* <div className={style.searchbox}><BoxSearch>svasdfvasdvfasvf</BoxSearch></div> */}
            </div>
            <div className={style.row}>
                <div className="col-sm">
                    <Link to={`/ReviewDetailPage`}>
                        <div className={style.school_card}>
                            <div className={style.image_item}>
                                <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="TruongTHCS_Tran_Phu" className={style.school_image} />
                            </div>
                            <div className={style.school_info}>
                                <h3 className={style.school_title}>Truong THCS Tran Phu</h3>
                                <p className={style.text_descrion}>We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.</p>
                                <div className={style.school_rating}>
                                    <span className={style.rating_stars}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className={style.rating_text}>(4.5 out of 5)</span>
                                </div>
                                <ul className={style.tag_catalog}>
                                    <li className={style.tag}>Public</li>
                                    <li className={style.tag}>Elementary</li>
                                    <li className={style.tag}>STEM Focus</li>
                                    <li className={style.tag}>STEM Focus</li>
                                </ul>
                            </div>

                        </div>
                    </Link>
                </div>
                {/* /* end column1 */}
            
                {/* <div className={style.column}> */}
                <div className="col-sm">
                    <Link to={`/ReviewDetailPage`}>
                        <div className={style.school_card}>
                            <div className={style.image_item}>
                                <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="TruongTHCS_Tran_Phu" className={style.school_image} />
                            </div>
                            <div className={style.school_info}>
                                <h3 className={style.school_title}>Truong THCS Tran Phu</h3>
                                <p className={style.text_descrion}>We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.</p>
                                <div className={style.school_rating}>
                                    <span className={style.rating_stars}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className={style.rating_text}>(4.5 out of 5)</span>
                                </div>
                                <ul className={style.tag_catalog}>
                                    <li className={style.tag}>Public</li>
                                    <li className={style.tag}>Elementary</li>
                                    <li className={style.tag}>STEM Focus</li>
                                    <li className={style.tag}>STEM Focus</li>
                                </ul>
                            </div>

                        </div>
                    </Link>
                </div>
                {/* /* end column1 */}
               
                {/* <div className={style.column}> */}
                <div className="col-sm">
                    <Link to='/ReviewDetailPage'>
                        <div className={style.school_card}>
                            <div className={style.image_item}>
                                <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="TruongTHCS_Tran_Phu" className={style.school_image} />
                            </div>
                            <div className={style.school_info}>
                                <h3 className={style.school_title}>Truong THCS Tran Phu</h3>
                                <p className={style.text_descrion}>We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.</p>
                                <div className={style.school_rating}>
                                    <span className={style.rating_stars}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className={style.rating_text}>(4.5 out of 5)</span>
                                </div>
                                <ul className={style.tag_catalog}>
                                    <li className={style.tag}>Public</li>
                                    <li className={style.tag}>Elementary</li>
                                    <li className={style.tag}>STEM Focus</li>
                                    <li className={style.tag}>STEM Focus</li>
                                </ul>
                            </div>

                        </div>
                    </Link>
                </div>
                {/* /* end column1 */}
                {/* <div className={style.column}> */}
                

            </div>

        </div >
        /* /* end div container */
    );
}

export default ConHightSchool;
