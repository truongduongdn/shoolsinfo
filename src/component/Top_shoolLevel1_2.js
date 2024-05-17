import React from 'react';
import top_level1_2 from '../assets/images/top_level-1-2.webp'


function Top_shoolLevel1_2(props) {
    return (
        // item 1
        <div className='top_level1'>
            {/* 1 */}
            <div className='top_level1-about'>
                <img className='top_level1-img' src={top_level1_2}></img>
            </div>
            {/* 2 */}
            <div>
                <p className='top_level1_text_main'>
                    Nguyen Van Troi Primary School (NVT) </p>
                <div className='top_level1-assess'>
                    <div className='top_level1-assess-point'>8.0</div>
                    <div className='top_level1-assess-assess' >
                        <p className='top_level1-assess-1'  >Good</p>
                        <p className='top_level1-assess-2'>Top 14</p>
                    </div>
                </div>
                <div className='top_level1-tranlate_general'>
                    <div className='top_level1-capacity'>
                        <p className='top_level1-capacity-all'>
                            18.000 học sinh
                        </p>
                    </div>
                    <p className='top_level1-icon'>
                        <i className="fa fa-graduation-cap icon-facilities"></i>
                        Grades 1 - 5
                        <br></br>
                        <i class="fa fa-university icon-facilities" aria-hidden="true"></i>
                        Good facilities
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top_shoolLevel1_2;