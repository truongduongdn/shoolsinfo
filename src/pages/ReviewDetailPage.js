import React from 'react';
import style from '../styles/ReviewDetail.module.css';

function ReviewDetailPage(props) {
    return (
        <div>
            <div className={style.review_detail}>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.image_slider}>
                            <img src="../images/TruongTHCS_Tran_Phu.jpg" alt="[School Name]" className={style.main_mage}/>
                                <div className={style.thumbnail_container}>
                                    <img src="images/thumbnail1.jpg" alt="Thumbnail" className={style.thumbnail} />
                                        <img src="images/thumbnail2.jpg" alt="Thumbnail" className={style.thumbnail}/>
                                        <img src="images/thumbnail1.jpg" alt="Thumbnail" className={style.thumbnail} />
                                        <img src="images/thumbnail2.jpg" alt="Thumbnail" className={style.thumbnail}/>
                                        </div>
                                </div>
                        </div>
                        <div className={style.column}>
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