import React from 'react';
import { useNavigate } from 'react-router-dom';
import second_home from '../assets/images/images.jpeg'
import background_home from '../assets/images/56127bf1dd089521558b4574-1536-1024--1--min--1--1504234772-width1536height1024.jpg'
import hinh_anh_quyet_tam from '../assets/images/hinh-anh-quyet-tam-on-thi-hoc-bai-14.jpg'
function HomePage(props) {
    let navigate = useNavigate();
    function handleNavigateAboutUs() {
        navigate('/aboutus')
    }
    function handleNavigateContact() {
        navigate('/contact')
    }
    return (
        <div className='Home_page background_about'>
            <div className='homepage_all'>
                <div className='home_about'>
                    <img className='img_general-startPage' src={background_home}></img>
                    <p className='general_text-main text_main-home'>BRING SUCCESS TO EVERYONE</p>
                </div>
            </div>
            {/* start page */}
            <div className='homepage_all-1'>
                <div className='home_about-1'>
                    <p className='text_header-main opening_sentence'>For Better Future</p>
                    <p className='text_header-main main_saying'>THE ROAD TO </p>
                    <p className='text_header-main main_saying success'>SUCCESS </p>
                    <p className='text_header-main secondary_saying success'>A good learning environment will help you have</p>
                    <p className='text_header-main secondary_saying success_2 '>a diverse view of things and study effectively</p>
                    <button onClick={handleNavigateAboutUs} className='text_header-main btn btn_aboutUs general_btn success'>About Us</button>
                    <button onClick={handleNavigateContact} className='btn btn_contact general_btn success'>Contact</button>
                </div>
                <div className='home_img-1'>
                    <img className='homepage_img-1' src={second_home} alt='ảnh học tập' width="530" height="450" ></img>
                </div>
            </div>
            {/* second page */}
            <div className='homepage_all-2'>
                <div className='home_about-2'>
                    
                </div>
                <div className='home-about-2-2'>
                    <p className='text_homepage-2'>Suggest </p>
                    <p className='text_homepage-2-2'>
                        suitable learning environments
                        <p className='text_homepage-2-3'>for everyone</p>
                        <img className='text_homepage-2-4' src={hinh_anh_quyet_tam}></img>
                        <p className='btn_home-third-2'>
                        <i class="fa fa-child" aria-hidden="true"></i>
                            for all levels of study           
                        </p>
                        <p className='btn_home-third'>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            School-Info.vn</p>
                    </p>
                    <div class="overlay"></div>
                </div>
            </div>
            {/* third page */}
            <div className='homepage_all-3'>
                <div className='home_about-3'>

                </div>
            </div>
        </div>

    );

}

export default HomePage;