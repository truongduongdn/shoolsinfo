import React, { useState, useRef } from 'react';
import background_aboutUs from '../assets/images/hinh_nen-aboutus.jpg'
import anh_2 from '../assets/images/hinh-anh-van-phong-cong-ty-carbonleo-2.jpg'
import anh_4 from '../assets/images/thiet-ke-phong-lam-viec-noi-cong-so.jpg'
import anh_5 from '../assets/images/Van-phong-lam-viec-hien-dai-su-dung-vach-ngan-lung-19-0.jpg'
import anh_6 from '../assets/images/hinh-anh-van-phong-cong-ty-casanova-mccann-2.jpg'
import anh_7 from '../assets/images/mau-thiet-ke-van-phong-hien-dai-dep.jpg'
import anh_3 from '../assets/images/cham-soc-cay-canh-cong-trinh.jpg'
import anh_nen_1 from '../assets/images/z5378342114979_07371fba7db92a48385c228c535b47b1.jpg'
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
                <img className='AboutUs-3_img' src={imageAboutUs} alt='Hình ảnh' />
                <button className='btn AboutUs-3_img-btn' onClick={handleChangeImageAboutUs}>+</button>
                <button className='btn AboutUs-3_img-btn2' onClick={handleChangeImageAboutUs_before}>-</button>
            </div>
            {/* fouth page */}
            <div className='AboutUs_page-4' ref={sectionRef}>
                <h6 className='AboutUs_h6'>TEAM</h6>
                <h2 className='AboutUs_main-2'>Board Management</h2>
                <div className='AboutUs-4_listImage'>
                    <div className='anh_ngoai_nen-1'>
                        <img className='anh_nen-aboutUs' src={anh_nen_1}></img>
                    </div>

                    <div className='anh_ngoai_nen-2'>
                        <img className='anh_nen-aboutUs' src={anh_nen_1}></img>
                    </div>

                    <div className='anh_ngoai_nen-3'>
                        <img className='anh_nen-aboutUs' src={anh_nen_1}></img>
                    </div>

                    <div className='anh_ngoai_nen-4'>
                        <img className='anh_nen-aboutUs' src={anh_nen_1}></img>
                    </div>

                    <div className='anh_ngoai_nen' class="overlay2"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;