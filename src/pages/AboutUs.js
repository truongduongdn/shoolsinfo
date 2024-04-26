import React, { useState,useRef } from 'react';

function AboutUs(props) {
    let [imageAboutUs, setImageAboutUs] = useState('https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-amvest.jpg')
    let sectionRef= useRef(null)
    function handleChangeImageAboutUs() {
        if (imageAboutUs === 'https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-amvest.jpg') {
            setImageAboutUs('https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-carbonleo-2.jpg')
        } else if (imageAboutUs === 'https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-carbonleo-2.jpg') {
            setImageAboutUs('https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-zola-2.jpg')
        } else if (imageAboutUs === 'https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-zola-2.jpg') {
            setImageAboutUs('https://dplusvn.com/wp-content/uploads/2020/02/van-phong-cong-ty-hyundai-card-pixel-factory.jpg')
        } else if (imageAboutUs === 'https://dplusvn.com/wp-content/uploads/2020/02/van-phong-cong-ty-hyundai-card-pixel-factory.jpg') {
            setImageAboutUs('https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-amorepacific-f21.jpg')
        } else if (imageAboutUs === 'https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-amorepacific-f21.jpg') {
            setImageAboutUs('https://noithatledinh.vn/Images/thiet-ke-noi-that-van-phong-1(8).jpg')
        } else if (imageAboutUs === 'https://noithatledinh.vn/Images/thiet-ke-noi-that-van-phong-1(8).jpg') {
            setImageAboutUs('https://greenhouse.com.vn/upload/data/images/du-an/120-mau-thiet-ke-biet-thu-san-vuon-dep-an-tuong-nhat-nam-2020-19(2).jpg')
        } else if (imageAboutUs === 'https://greenhouse.com.vn/upload/data/images/du-an/120-mau-thiet-ke-biet-thu-san-vuon-dep-an-tuong-nhat-nam-2020-19(2).jpg') {
            setImageAboutUs('https://dplusvn.com/wp-content/uploads/2020/02/hinh-anh-van-phong-cong-ty-amvest.jpg')
        }
    }
    function scroolToSection(){
        sectionRef.current.scrollIntoView({behavior:'smooth'})
    }
    return (
        <div className=' AboutUs_page background_about'>
            {/* first page */}
            <div className='AboutUs_page-1'>
                <img className='img_general-startPage ' src='https://duhochoanmy.vn/custom/domain_1/articles/fullsize/article13901/10-ngoi-truong-dai-hoc-co-dep-1498580887-dGwZTP.jpg' alt='truong hoc about us'></img>
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
                <button className='btn AboutUs-3_img-btn' onClick={handleChangeImageAboutUs}>-</button>
            </div>
            {/* fouth page */}
            <div className='AboutUs_page-4' ref={sectionRef}>
                <h6 className='AboutUs_h6'>TEAM</h6>
                <h2 className='AboutUs_main-2'>Board Management</h2>
                <div className='AboutUs-4_listImage'>
                    <img></img>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;