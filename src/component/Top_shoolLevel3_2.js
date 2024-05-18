import React from 'react';
import anh5_3_2_item from '../assets/images/anh5-2-2.jpeg'

function Top_shoolLevel3_2(props) {
    return (
        <div className='top_level2-3'>
        {/* 1 */}
        <div className='top_level23-about'>
            <img className='top_level1-img' src={anh5_3_2_item}></img>
        </div>
        {/* 2 */}
        <div>
            <p className='top_level1_text_main'>
            Phong Phu High School (PP) </p>
            <div className='top_level1-assess'>
                <div className='top_level1-assess-point'>8.0</div>
                <div className='top_level1-assess-assess' >
                    <p className='top_level1-assess-1'  >Good</p>
                    <p className='top_level1-assess-2'>Top 10</p>
                </div>
            </div>
            <div className='top_level1-tranlate_general'>
                <div className='top_level2_3-capacity'>
                    <p className='top_level1-capacity-all'>
                        29.000 học sinh
                    </p>
                </div>
                <p className='top_level1-icon'>
                    <i className="fa fa-graduation-cap icon-facilities"></i>
                    Grades 10 - 12
                    <br></br>
                    <i class="fa fa-university icon-facilities" aria-hidden="true"></i>
                    Modern facilities
                </p>
            </div>
        </div>
    </div>
    );
}

export default Top_shoolLevel3_2;