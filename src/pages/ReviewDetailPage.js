import React from 'react';
import style from '../styles/ReviewDetail.module.css';
import '../styles/root.module.css';

function ReviewDetailPage(props) {
    return (
        <div>
            <h1>Review Details</h1>
            <div className={style.review_detail}>
                <div className={style.row}>
                    <div className={style.column1}>
                        <div className={style.image_slider}>
                            <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="[School Name]" className={style.main_image}/>
                                <div className={style.thumbnail_container}>
                                    <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="Thumbnail" className={style.thumbnail} />
                                        <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="Thumbnail" className={style.thumbnail}/>
                                        <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="Thumbnail" className={style.thumbnail} />
                                        <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="Thumbnail" className={style.thumbnail}/>
                                        </div>
                                </div>
                        </div>
                        <div className={style.column2}>
                            <h1>[School Name]</h1>
                            <p>[School Location]</p>
                            <div className={style.review_summary}>
                                <h2>Review Summary</h2>
                                <p>Overall Sentiment: [Overall Sentiment]</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            );
}

            export default ReviewDetailPage;