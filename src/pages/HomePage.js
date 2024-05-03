import React from 'react';
import { useNavigate } from 'react-router-dom';
import second_home from '../assets/images/images.jpeg'
import background_home from '../assets/images/56127bf1dd089521558b4574-1536-1024--1--min--1--1504234772-width1536height1024.jpg'
import hinh_anh_quyet_tam from '../assets/images/hinh-anh-quyet-tam-on-thi-hoc-bai-14.jpg'
import news_1 from '../assets/images/news-1.jpg'
import news_2 from '../assets/images/news-2.jpg'
import news_3 from '../assets/images/news-3.jpg'
import news_4 from '../assets/images/news-4.jpg'
import news_5 from '../assets/images/news-5.jpg'
// import new2
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
            {/* second page */}
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
            {/* third page */}
            <div className='homepage_all-2'>
                <div className='home-about-2-2'>
                    <div className='home-about-2-2_board'>
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
                    <div className='home-about-2-2_top_school-1'>
                        <p className='Home-top-level1_school'>
                            <i class="fa fa-newspaper-o space_4px" aria-hidden="true"></i>
                            Top best level 1 schools today
                        </p>
                    </div>
                </div>
                <div className='home_about-2'>
                    <div className='text-aboutUs-2'>
                        <p className='text_main_about-2'>
                        <i class="fa fa-newspaper-o space_4px" aria-hidden="true"></i>

                             News</p>
                        <p className='text_about-2'>Latest News</p>
                    </div>
                    {/* list news */}
                    {/* list-1 */}
                    <div className='AboutUs_news'>
                        <div className='AboutUs_news-all'>
                            <img className='AboutUs_news-all-img' src={news_1}></img>
                            <p className='textNews-about-1'>HCMC's specialized, integrated grade 10 benchmark for three years.</p>
                        </div>
                        <div className='AboutUs_news-all-dash'></div>
                        <div className='textNews-about-2'>
                            <p>HCMC-Specialized / Literature and English classes have often led in benchmarking in HCMC for the past three years. </p>
                        </div>
                        <p className='textNews-about-3'>
                            School-info.vn
                            <i className="fa fa-graduation-cap"></i>
                        </p>
                    </div>
                    {/* list-2 */}
                    <div className='AboutUs_news'>
                        <div className='AboutUs_news-all'>
                            <img className='AboutUs_news-all-img' src={news_2}></img>
                            <p className='textNews-about-1'>Nearly 60 provinces announce grade 10 exam schedule.</p>
                        </div>
                        <div className='AboutUs_news-all-dash'></div>
                        <div className='textNews-about-2'>
                            <p>Nearly 60 localities finalized the schedule of exams and admission for grade 10 in early June, with three subjects of Math, Literature and English. </p>
                        </div>
                        <p className='textNews-about-3-fix'>
                            School-info.vn
                            <i className="fa fa-graduation-cap"></i>
                        </p>
                    </div>
                    {/* list-3 */}
                    <div className='AboutUs_news'>
                        <div className='AboutUs_news-all'>
                            <img className='AboutUs_news-all-img' src={news_3}></img>
                            <p className='textNews-about-1'>Private school tuition fees in Hanoi are up to 60 million VND a month.</p>
                        </div>
                        <div className='AboutUs_news-all-dash'></div>
                        <div className='textNews-about-2'>
                            <p>More than 20 private secondary schools in Hanoi announced 6th grade tuition fees at VND 2.5-57.5 million a month, excluding intensive tuition, semi-boarding, shuttle buses... </p>
                        </div>
                        <p className='textNews-about-3-fix'>
                            School-info.vn
                            <i className="fa fa-graduation-cap"></i>
                        </p>
                    </div>
                    {/* list-4 */}
                    <div className='AboutUs_news'>
                        <div className='AboutUs_news-all'>
                            <img className='AboutUs_news-all-img' src={news_4}></img>
                            <p className='textNews-about-1'>Da Nang boys win national first prize UPU letter writing.</p>
                        </div>
                        <div className='AboutUs_news-all-dash'></div>
                        <div className='textNews-about-2'>
                            <p>Transforming into a 72-year-old man talking about children's lack of love, Nguyen Do Quang Minh surpassed 1.5 million posts, winning the first prize in the UPU Letter Writing Contest. </p>
                        </div>
                        <p className='textNews-about-3-fix'>
                            School-info.vn
                            <i className="fa fa-graduation-cap"></i>
                        </p>
                    </div>
                    {/* list-5 */}
                    <div className='AboutUs_news'>
                        <div className='AboutUs_news-all'>
                            <img className='AboutUs_news-all-img' src={news_5}></img>
                            <p className='textNews-about-1'>Find out about the Australian standard study program right in Ho Chi Minh</p>
                        </div>
                        <div className='AboutUs_news-all-dash'></div>
                        <div className='textNews-about-2'>
                            <p>The roadmap gives your child the opportunity to get into major universities around the world with scholarships of up to 70%.</p>
                        </div>
                        <p className='textNews-about-3'>
                            School-info.vn
                            <i className="fa fa-graduation-cap"></i>
                        </p>
                    </div>

                </div>
            </div>

            {/* fourth page */}
            <div className='homepage_all-3'>
                <div className='home_about-3'>

                </div>
            </div>
        </div>

    );

}

export default HomePage;