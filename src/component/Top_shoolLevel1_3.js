import React from 'react';
import top_level1_3 from '../assets/images/top_level-1-3.webp'


function Top_shoolLevel1_3(props) {
    return (
      // item 1
      <div className='top_level1'>
      {/* 1 */}
      <div className='top_level1-about'>
          <img className='top_level1-img' src={top_level1_3}></img>
      </div>
      {/* 2 */}
      <div>
          <p className='top_level1_text_main'>
              Ly Thuong Kiet Primary School (LTK) </p>
          <div className='top_level1-assess'>
              <div className='top_level1-assess-point'>7.4</div>
              <div className='top_level1-assess-assess' >
                  <p className='top_level1-assess-1'  >Good</p>
                  <p className='top_level1-assess-2'>Top 20</p>
              </div>
          </div>
          <div className='top_level1-tranlate_general'>
              <div className='top_level1-capacity'>
                  <p className='top_level1-capacity-all'>
                      12.000 học sinh
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

export default Top_shoolLevel1_3;