import React, { useState, useRef } from 'react';
import background_aboutUs from '../assets/images/hinh_nen-aboutus.jpg'
import anh_2 from '../assets/images/hinh-anh-van-phong-cong-ty-carbonleo-2.jpg'
import anh_4 from '../assets/images/thiet-ke-phong-lam-viec-noi-cong-so.jpg'
import anh_5 from '../assets/images/Van-phong-lam-viec-hien-dai-su-dung-vach-ngan-lung-19-0.jpg'
import anh_6 from '../assets/images/hinh-anh-van-phong-cong-ty-casanova-mccann-2.jpg'
import anh_7 from '../assets/images/mau-thiet-ke-van-phong-hien-dai-dep.jpg'
import anh_3 from '../assets/images/cham-soc-cay-canh-cong-trinh.jpg'
import anh_nen_1 from '../assets/images/z5378342114979_07371fba7db92a48385c228c535b47b1.jpg'
import anh_nen_2 from '../assets/images/Screenshot 2024-05-06 182011.png'
import Header from '../component/Header';
import Footer from '../component/Footer';

function AboutUs(props) {
    let [imageAboutUs, setImageAboutUs] = useState(anh_2)
    let sectionRef = useRef(null)
    function handleChangeImageAboutUs() {
        if (imageAboutUs === anh_2) {
            setImageAboutUs(anh_3)
        } else if (imageAboutUs === anh_3) {
            setImageAboutUs(anh_4)
        } else if (imageAboutUs === anh_4) {
            setImageAboutUs(anh_5)
        } else if (imageAboutUs === anh_5) {
            setImageAboutUs(anh_6)
        } else if (imageAboutUs === anh_6) {
            setImageAboutUs(anh_7)
        } else if (imageAboutUs === anh_7) {
            setImageAboutUs(anh_2)
        }
    }
    function handleChangeImageAboutUs_before() {
        if (imageAboutUs === anh_7) {
            setImageAboutUs(anh_6)
        } else if (imageAboutUs === anh_6) {
            setImageAboutUs(anh_5)
        } else if (imageAboutUs === anh_5) {
            setImageAboutUs(anh_4)
        } else if (imageAboutUs === anh_4) {
            setImageAboutUs(anh_3)
        } else if (imageAboutUs === anh_3) {
            setImageAboutUs(anh_2)
        } else if (imageAboutUs === anh_2) {
            setImageAboutUs(anh_7)
        }
    }
    function scroolToSection() {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className=' AboutUs_page background_about'>
              <Header />
            {/* first page */}
            <div className='AboutUs_page-1'>
                <img className='img_general-startPage ' src={background_aboutUs} alt='truong hoc about us'></img>
                <p className='general_text-main'>About Us</p>
                <button className='btn btn-primary general_btn' onClick={scroolToSection}>Member</button>
            </div>
            {/* second page */}
            <div className='AboutUs_page-2'>
                <h6 className='AboutUs_h6'>ABOUT US</h6>
                <h2 className='AboutUs_main-2'>Established on 2024</h2>
                <p className='AboutUs_text-2 edit_textAboutUs'>
                    School-info is an online platform for parents and students to discover and review schools from primary to university level. With the goal of providing accurate, reliable and useful information, School-info is a trusted destination for those looking for information about education.
                </p>
                <p className='AboutUs_text-2 edit_textAboutUs'> Users can rate and write reviews about the schools they have experienced, sharing their opinions, feelings and personal experiences.
                    Detailed Information: Each school has a detailed information page with information about academic programs, extracurricular activities, and contact information.
                    School-info aims to create an information and sharing community about education, helping parents and students have complete and correct information to be able to choose the most suitable school for themselves. </p>

                <p className='AboutUs_text-2 edit_textAboutUs'>
                    School-info proactively collects information from many different sources and diverse types of schools, from public to private, from private to international schools, to ensure richness and suitability to the needs of students. everybody.
                    School-info is not only a useful tool in finding information about schools, but also a vibrant community of people interested in education where they can share and find support during the school selection process.
                </p>
            </div>
            {/* third page */}
            <div className='AboutUs_page-3'>
                <button className='btn AboutUs-3_img-btn2' onClick={handleChangeImageAboutUs_before}>-</button>
                <img className='AboutUs-3_img' src={imageAboutUs} alt='Hình ảnh' />
                <button className='btn AboutUs-3_img-btn' onClick={handleChangeImageAboutUs}>+</button>
            </div>
            {/* fouth page */}
            <div className='AboutUs_page-4' ref={sectionRef}>
                <h6 className='AboutUs_h6'>TEAM</h6>
                <h2 className='AboutUs_main-2'>Board Management</h2>
                <div className='AboutUs-4_listImage'>
                    {/* list1 */}
                    <div className='home-about-2-2 '>
                        <div className='aboutUs-2-2_board'>
                            <img className='AboutUs_img-2-4' src={anh_nen_1}></img>
                            <div class="overlay">
                                <p className='AboutUs_page-general AboutUs_page-4_text'>Le Thanh Phu</p>
                                <p className='AboutUs_page-general AboutUs_page-4_text-2'>MANAGER</p>
                                <a href='https://www.facebook.com/profile.php?id=100014940010080&mibextid=LQQJ4d'>
                                    <i class="general-icon_last fa-brands fa-facebook "></i>
                                </a>
                                <a href='https://www.instagram.com/phule_eee?igsh=NmFyc3lzeTUzcXJs&utm_source=qr'>
                                    <i class="general-icon_last fa-brands fa-instagram"></i>
                                </a>
                                <a href='https://www.tiktok.com/@phu_leeee?_t=8m7nwWX74oD&_r=1'>
                                    <i class="general-icon_last fa-brands fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* list2 */}
                    <div className='home-about-2-2'>
                        <div className='aboutUs-2-2_board'>
                            <img className='AboutUs_img-2-4' src={anh_nen_2}></img>
                            <div class="overlay">
                                <p className='AboutUs_page-general AboutUs_page-4_text'>Truong Duong</p>
                                <p className='AboutUs_page-general AboutUs_page-4_text-2'>MANAGER</p>
                                <a href='https://www.facebook.com/profile.php?id=100014940010080&mibextid=LQQJ4d'>
                                    <i class="general-icon_last fa-brands fa-facebook "></i>
                                </a>
                                <a href='https://www.instagram.com/phule_eee?igsh=NmFyc3lzeTUzcXJs&utm_source=qr'>
                                    <i class="general-icon_last fa-brands fa-instagram"></i>
                                </a>
                                <a href='https://www.tiktok.com/@phu_leeee?_t=8m7nwWX74oD&_r=1'>
                                    <i class="general-icon_last fa-brands fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;