import React from 'react';
import '../styles/contactPage.css'
function BannerPage(props) {
  return (
    <div>
      <div className="col-sm">
        <div className='sub-banner'>

          <h2 className='title-size'> Contact us</h2>
          <span className='list-text'><NavLink to="/" className="list-text">Home </NavLink> <span class="elementor-icon-list-icon">
            <i aria-hidden="true" class="fas fa-chevron-right"></i></span>
            <NavLink to="/contactPage" className="list-text"> Contact</NavLink></span>
        </div>
      </div>

    </div>
  );
}

export default BannerPage;