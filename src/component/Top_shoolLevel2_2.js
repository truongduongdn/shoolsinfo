import React from 'react';
import anh5_2_item from '../assets/images/anh5-2.jpg'
function Top_shoolLevel2_2(props) {
    return (
        <div className='top_level2-3'>
            {/* 1 */}
            <div className='top_level23-about'>
                <img className='top_level1-img' src={anh5_2_item}></img>
            </div>
            {/* 2 */}
            <div>
                <p className='top_level1_text_main'>
                    Nguyen Thai Secondary School (NT) </p>
                <div className='top_level1-assess'>
                    <div className='top_level1-assess-point'>9.0</div>
                    <div className='top_level1-assess-assess' >
                        <p className='top_level1-assess-1'  >Good</p>
                        <p className='top_level1-assess-2'>Top 3</p>
                    </div>
                </div>
                <div className='top_level1-tranlate_general'>
                    <div className='top_level2_3-capacity'>
                        <p className='top_level1-capacity-all'>
                            30.000 học sinh
                        </p>
                    </div>
                    <p className='top_level1-icon'>
                        <i className="fa fa-graduation-cap icon-facilities"></i>
                        Grades 6 - 9
                        <br></br>
                        <i class="fa fa-university icon-facilities" aria-hidden="true"></i>
                        Modern facilities
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top_shoolLevel2_2;