import React from 'react';
import { useNavigate } from 'react-router-dom';
import second_home from '../assets/images/images.jpeg'
import background_home from '../assets/images/56127bf1dd089521558b4574-1536-1024--1--min--1--1504234772-width1536height1024.jpg'
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
                    <p className='text_header-main secondary_saying success'>A good learning environment will help you have a</p>
                    <p className='text_header-main secondary_saying success_2 '>diverse view of things and study effectively</p>
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
                    <img className='homepage_img-2 home_img-2_up home_img-2_mg' src='https://media.istockphoto.com/id/1470160123/vi/anh/n%E1%BB%AF-gi%C3%A1o-vi%C3%AAn-%C4%91%E1%BB%8Dc-s%C3%A1ch-cho-h%E1%BB%8Dc-sinh-ti%E1%BB%83u-h%E1%BB%8Dc-%C4%91a-v%C4%83n-h%C3%B3a-ng%E1%BB%93i-tr%C3%AAn-s%C3%A0n-trong-l%E1%BB%9Bp-%E1%BB%9F-tr%C6%B0%E1%BB%9Dng.jpg?s=612x612&w=0&k=20&c=0iMyYLJGE1ov6qBfAS-smDPQXkei73Duk7ZDLyi4U4M='></img>
                    <img className='homepage_img-2' src='https://media.istockphoto.com/id/1358014313/vi/anh/nh%C3%B3m-h%E1%BB%8Dc-sinh-ti%E1%BB%83u-h%E1%BB%8Dc-c%C3%B3-l%E1%BB%9Bp-h%E1%BB%8Dc-m%C3%A1y-t%C3%ADnh-v%E1%BB%9Bi-gi%C3%A1o-vi%C3%AAn-c%E1%BB%A7a-h%E1%BB%8D-trong-l%E1%BB%9Bp-h%E1%BB%8Dc.jpg?s=612x612&w=0&k=20&c=fmB1pttW1H--cwYazS6UEqige6lOX9AVpjNTyDFD-RE='></img>
                    <img className='homepage_img-2 home_img-2_up' src='https://media.istockphoto.com/id/525409405/vi/anh/h%C3%ACnh-%E1%BA%A3nh-ph%C3%ADa-sau-c%E1%BB%A7a-h%E1%BB%8Dc-sinh-tu%E1%BB%95i-teen-gi%C6%A1-tay-trong-l%E1%BB%9Bp-h%E1%BB%8Dc.jpg?s=612x612&w=0&k=20&c=UIH06LZwXxheIUPZvkGKenc223Bka2_yQE-1Q2lnugg='></img>
                </div>
                <div className='home-about-2-2'>
                    <p className='text_homepage-2'>Your future is decided by you</p>
                    <p className='text_homepage-2-2'>
                        School is the stepping stone for us to step into society,
                        <br />
                        choosing a good education is inevitable.
                        <br />
                    </p>
                    <p className='text_homepage-2-2'>
                        Because the future of the country is also yours, if you are
                        <br />
                        still wondering what school environment to choose, please
                        <br />
                        refer to our top best schools so you can choose for yourself.
                        <br />
                        A correct and appropriate roadmap will help you have a better
                        <br />
                        learning environment.
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