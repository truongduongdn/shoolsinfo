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
import Top_shoolLevel1 from '../component/Top_shoolLevel1';
import Top_shoolLevel1_2 from '../component/Top_shoolLevel1_2';
import Top_shoolLevel1_3 from '../component/Top_shoolLevel1_3';
import Top_shoolLevel1_4 from '../component/Top_shoolLevel1_4';
import img_fourth_main from '../assets/images/anh-4.jpeg';
import Top_shoolLevel2_1 from '../component/Top_shoolLevel2_1';
import Top_shoolLevel2_2 from '../component/Top_shoolLevel2_2';
import Top_shoolLevel2_3 from '../component/Top_shoolLevel2_3';
import Top_shoolLevel2_4 from '../component/Top_shoolLevel2_4';
import Top_shoolLevel3_1 from '../component/Top_shoolLevel3_1';
import Top_shoolLevel3_2 from '../component/Top_shoolLevel3_2';
import Top_shoolLevel3_3 from '../component/Top_shoolLevel3_3';
import Top_shoolLevel3_4 from '../component/Top_shoolLevel3_4';
import Header from '../component/Header'
import Footer from '../component/Footer';
import BoxSearch from '../component/BoxSearch';
// import new2
function HomePage(props) {
    let navigate = useNavigate();
    function handleNavigateAboutUs() {
        navigate('/aboutus')
    }
    function handleNavigateContact() {
        navigate('/ContactPage')
    }
    return (
        <div className='Home_page background_about'>
            <Header />
            <div className='homepage_all'>
                <div className='home_about'>
                    <img className='img_general-startPage' src={background_home}></img>
                    <div>
                        <p className='general_text-main-1'>Home </p>
                        <p className='general_text-main-2'>BRING SUCCESS TO EVERYONE</p>
                    </div>
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
                   <div className='chua_btn-2'>
                    <button onClick={handleNavigateAboutUs} className='text_header-main btn btn_aboutUs general_btn success'>About Us</button>
                    <button onClick={handleNavigateContact} className='btn btn_contact general_btn success'>Contact</button>
                   </div>
                </div>
                <div className='home_img_about'>
                    <div className='home_img-1'>
                        <img className='homepage_img-1' src={second_home} alt='ảnh học tập'  ></img>
                    </div>
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
                            <div className='home_board_text-img'>
                                <img className='text_homepage-2-4' src={hinh_anh_quyet_tam}></img>
                                <div className='btn_home-third-about'>
                                    <p className='btn_home-third-2'>
                                        <i class="fa fa-child" aria-hidden="true"></i>
                                        for all levels of study
                                    </p>
                                    <p className='btn_home-third'>
                                        <i class="fa fa-globe" aria-hidden="true"></i>
                                        School-Info.vn</p>
                                </div>
                            </div>
                        </p>
                        <div class="overlay"></div>
                    </div>
                    <div className='home-about-2-2_top_school-1'>
                        <p className='Home-top-level1_school'>
                            <i class="fa-solid fa-newspaper general_icon-news "></i>
                            Top Best Elementary Schools
                        </p>
                        <div className='margin-bottom_10px'>
                            <Top_shoolLevel1 />
                        </div>
                        <div className='margin-bottom_10px'>
                            <Top_shoolLevel1_2 />
                        </div>
                        <div className='margin-bottom_10px'>
                            <Top_shoolLevel1_3 />
                        </div>
                        <div className='margin-bottom_10px'>
                            <Top_shoolLevel1_4 />
                        </div>
                    </div>
                </div>
                <div className='home_about-2'>
                    <div className='text-aboutUs-2'>
                        <p className='text_main_about-2'>
                            <i class="fa-solid fa-newspaper general_icon-news"></i>
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
                            <p className='multiline-ellipsis'>HCMC-Specialized / Literature and English classes have often led in benchmarking in HCMC for the past three years. It's worth commending </p>
                        </div>
                        <p className='textNews-about-3 '>
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
                            <p className='multiline-ellipsis'>Nearly 60 localities finalized the schedule of exams and admission for grade 10 in early June, with three subjects of Math, Literature and English. </p>
                        </div>
                        <p className='textNews-about-3'>
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
                            <p className='multiline-ellipsis'>More than 20 private secondary schools in Hanoi announced 6th grade tuition at 2.5-57.5 million VND/month, not including additional tuition, facilities, boarding, and transportation... </p>
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
                            <p className='multiline-ellipsis'>Transforming into a 72-year-old man talking about children's lack of love, Nguyen Do Quang Minh surpassed 1.5 million posts, winning the first prize in the UPU Letter Writing Contest. </p>
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
                            <p className='multiline-ellipsis'>The roadmap gives your child the opportunity to get into major universities around the world with scholarships of up to 70%.</p>
                        </div>
                        <p className='textNews-about-3'>
                            School-info.vn
                            <i className="fa fa-graduation-cap"></i>
                        </p>
                    </div>
                </div>
            </div>

            {/* fourth page */}
            <div className='homepage_all-4'>
                <div >
                    <img className='home_about_4' src={img_fourth_main}></img>
                    <div className='home_about_4-main'>
                        <p className='home_about_4-main-main'
                        >School-Info
                        </p>
                        <p className='home_about_4-main-second'>For Better Future </p>
                    </div>
                    <p className='home_about_4-main-third' >Dream Handicap Journey</p>
                </div>
            </div>
            {/* five page */}
            <div className='homepage_all-5'>
                <div className='home-about-2-2_top_school-1'>
                    <p className='Home-top-level1_school'>
                        <i class="fa-solid fa-newspaper general_icon-news"></i>
                        Top Best Level 2 Schools
                    </p>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel2_1 />
                    </div>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel2_2 />
                    </div>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel2_3 />

                    </div>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel2_4 />
                    </div>
                </div>
                <div className='home-about-2-2_top_school-1'>
                    <p className='Home-top-level1_school'>
                        <i class="fa-solid fa-newspaper general_icon-news"></i>
                        Top Best Level 3 Schools
                    </p>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel3_1 />
                    </div>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel3_2 />
                    </div>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel3_3 />
                    </div>
                    <div className='margin-bottom_10px'>
                        <Top_shoolLevel3_4 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default HomePage;