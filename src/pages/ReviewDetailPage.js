import React from 'react';
// import '../styles/ReviewDetail.css';
// import '../styles/root.module.css';
import '../styles/ReviewDetail.css';

// import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { ProgressBar } from 'react-bootstrap';
// import StudentSatisfaction from '../component/Process_bar';
import ReviewSchool from '../component/ReviewSchool';
import Header from '../component/Header';
import Footer from '../component/Footer';

function ReviewDetailPage(props) {
    // const progressValue = 70;

    return (
        <div className='container-fluid'>
            <Header />
            <div className='container'>
                <div className="review-detail-container">
                    <div className="column1">
                        <div className="slideshow-gallery">
                            <Carousel>
                                <div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="The Woods" />

                                </div>
                                <div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div>
                                <div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div>
                                <div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div>
                                <div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div><div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div><div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div><div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div><div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div><div>
                                    <img src="../TruongTHCS_Tran_Phu.jpg" alt="Cinque Terre" />

                                </div>

                            </Carousel>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="review-content">

                            <div className="review-info">
                                <h2 className='schooltitle'>Trường TH-THCS Pathway Tuệ Đức</h2>
                                <p className='schoolAddress'> Số 644 Nguyễn Thị Định, P. Thạnh Mỹ Lợi, Thành phố Thủ Đức Hồ Chí Minh </p>
                                <div class="review-container">
                                    <h2 class="review-title">Đánh giá từ phụ huynh</h2>
                                    <div class="review-rating"> 4.94/5</div>
                                    <div class="review-stars">
                                        <span class="review-star">★</span>
                                        <span class="review-star">★</span>
                                        <span class="review-star">★</span>
                                        <span class="review-star">★</span>
                                        <span class="review-star">★</span>
                                    </div>
                                    <p class="review-description">Xem chi tiết 635 đánh giá</p>
                                    <div class="review-category-rating">
                                        <div class="review-category">Tư thục</div>
                                        <div class="review-container-number">319
                                            Khuyên học</div>
                                        <div class="review-container-rating">616
                                            Đăng ký học</div>
                                    </div>
                                    {/* <div class="review-category-rating">
                                    <div class="review-category">Chất lượng giáo dục</div>
                                    <div class="review-container-number">3/5</div>
                                    <div class="review-container-rating">★★★★★★</div>
                                </div> */}
                                    {/* 
                                 */}

                                    {/* <div class="review-category-rating">
                                    <div class="review-category">Sự phát triển của bé</div>
                                    <div class="review-container-number">3/5</div>
                                    <div class="review-container-rating">★★★★★★</div>
                                </div> */}
                                    {/* <div class="review-category-rating">
                                    <div class="review-category">Tương xứng với học phí</div>
                                    <div class="review-container-number">3/5</div>
                                    <div class="review-container-rating">★★★★★★</div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
          
                <div className="column3">
                    {/* main contain */}
                    <section className="about_School" >
                        <h2>Tổng Quan</h2>
                        <div className="two-column-section">
                            <div className="column">
                                <h2>Contact Info</h2>
                                <p style={{ color: 'var(--))' }}>
                                    <li> <i className=""></i>Khoảng học phí  Từ 8 triệu đến 9 triệu VND / tháng</li>
                                    <li><i class="fa-solid fa-comments-dollar"></i> Chi tiết biểu phí và chính sách học phí   <i className="far fa-hand-point-right"></i></li>
                                    <li> <i class="fas fa-child"></i> Độ tuổi học sinh, học viên: 6 tuổi - 12 tuổi</li>
                                    <li> <i class="fa fa-map-marker"> </i> Thành phố Thủ Đức, Hồ Chí Minh</li>
                                    <li><i class="fa-solid fa-location-dot"></i> Xem trên map</li>
                                </p>
                            </div>
                            <div className="column">
                                <h2>Loại hình đào tạo</h2>
                                <p>Tiểu học, Trung học cơ sở </p>
                                {/* <button className='btn bnt-sucess'> </button> */}
                                <button type="button" class="btn btn-success">Call for more detail</button>
                            </div>
                        </div>
                    </section>

                    <section className="about_School">
                        <div about_School="progress">
                            {/* <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                            <span class="sr-only">70% Complete</span>
                        </div> */}
                        </div>
                        <h2> Giới thiệu chung Trường TH-THCS Pathway Tuệ Đức - cơ sở Nguyễn Thị Định</h2>
                        <p> Giới thiệu chung Trường TH-THCS Pathway Tuệ Đức - cơ sở Nguyễn Thị Định

                            Tháng 4/2021, Pathway Tuệ Đức hân hoan chào đón thành viên mới – Trường TH-THCS Pathway Tuệ Đức - cơ sở Nguyễn Thị Định, Quận 2. Vậy là, Hệ thống trường Tuệ Đức đã có thêm cơ sở khang trang dành cho các em học sinh Tiểu học và THCS tại Quận 2 và khu vực lân cận.

                            Là thành viên trong ngôi nhà chung Pathway Tuệ Đức, cơ sở Nguyễn Thị Định có đội ngũ thầy cô tâm huyết với nghề, giàu kinh nghiệm, được đào tạo chuyên môn về phương pháp giáo dục Tiểu học, THCS, chương trình quản lý cảm xúc; được tham gia các khóa học vun bồi đạo đức, thực hành tỉnh thức (Mindfulness) và các khóa huấn luyện kỹ năng…
                            Tầm Nhìn của Trường TH-THCS Pathway Tuệ Đức - cơ sở Nguyễn Thị Định:

                            Trở thành hệ thống trường dạy Đạo đức và Kỹ năng hàng đầu tại Việt Nam, nơi một thế hệ trẻ biết tự học suốt đời, tự chịu trách nhiệm với bản thân và biết cống hiến vì cộng đồng.
                            Sứ Mạng:

                            Là ngôi trường, nơi kết tinh của KHOA HỌC và ĐẠO HỌC, trong đó Đạo học là nền tảng, là cốt lõi, được thấm sâu trong từng tiết học, từng chuyến dã ngoại, từng bữa ăn…cho đến mọi hành vi trong đời sống.
                            Nơi mà mỗi tiết học là một giờ chơi, mỗi tình huống là một bài học… Ở nơi ấy, các học trò được trui rèn thành chiến sĩ, được băng rừng vượt thác với đầy thách thức…
                            Nơi mà mọi thầy cô đều có nếp sống gương mẫu, nơi mà mọi học trò đến để được yêu thương chứ không chiều chuộng, được thổi hồn nhân cách chứ không phải nhồi nhét kiến thức…</p>
                    </section>
                    <section class="about_School_teacher">
                        <h2 >Đội ngũ giáo viên Trường TH-THCS Pathway Tuệ Đức - cơ sở Nguyễn Thị Định</h2>
                        <p >
                            Đội ngũ giáo viên của Trường TH-THCS Pathway Tuệ Đức - cơ sở Nguyễn Thị Định đều được đào tạo chuyên môn vững vàng và luôn được tham gia bồi dưỡng nghiệp vụ, tích lũy, trau dồi kinh nghiệm. Giáo viên Tiểu học và giáo viên tiếng Anh đều tốt nghiệp từ Đại học sư phạm theo đúng chuyên ngành.

                            Nhà trường rất ít thay đổi giáo viên. Thông thường, nhà trường bố trí giáo viên theo lớp và theo niên học.
                        </p>
                    </section>
                    <section className="Write-reivew">
                        <h2 style={{ textAlign: 'left' }}>Write review</h2>
                        <ReviewSchool />
                    </section>
                    {/* <section className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.874562700104!2d106.63249657576847!3d10.820910258370157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529db02a3e37f%3A0xc6201d0c33e11e98!2zVHLGsOG7nW5nIFRIQ1MgLSBUSFBUIFBhdGh3YXkgVHXhu4cgxJDhu6ljIC0gQ8ahIHPhu58gTmd1eeG7hW4gU-G7uSBTw6FjaCwgUXXhuq1uIFTDom4gQsOsbmg!5e0!3m2!1sen!2s!4v1714378862667!5m2!1sen!2s"
                        style={{ width: "600", height: "450" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" >scsadv</iframe>

                </section> */}
                </div>
                </div>
            <Footer />
        </div>
    );
}

export default ReviewDetailPage;