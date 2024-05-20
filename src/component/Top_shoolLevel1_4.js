import React from 'react';
import top_level1_4 from '../assets/images/top_level-1-4.webp'


function Top_shoolLevel1_4(props) {
    return (
         // item 1
         <div className='top_level1'>
         {/* 1 */}
         <div className='top_level1-about'>
             <img className='top_level1-img' src={top_level1_4}></img>
         </div>
         {/* 2 */}
         <div>
             <p className='top_level1_text_main'>
                 Tan Xuyen Primary School (TX) </p>
             <div className='top_level1-assess'>
                 <div className='top_level1-assess-point'>7.0</div>
                 <div className='top_level1-assess-assess' >
                     <p className='top_level1-assess-1'  >Good</p>
                     <p className='top_level1-assess-2'>Top 36</p>
                 </div>
             </div>
             <div className='top_level1-tranlate_general'>
                 <div className='top_level1-capacity'>
                     <p className='top_level1-capacity-all'>
                         10.000 học sinh
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

export default Top_shoolLevel1_4;