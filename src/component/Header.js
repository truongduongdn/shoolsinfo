import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(props) {
    let item_link_all = 'item_link_all';
    return (
        <div className='header_page'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light header_navbar">
                <div class="container-fluid">
                    <a class="header_logo" href="#">School-Info </a>
                    <i className="fa fa-graduation-cap icon_main-nav"></i>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                                    }
                                    to="/">HOME</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                                } to="/AllSchool">
                                    ALL SCHOOL
                                    <div classNme='nav-item_hover'>
                                    </div>
                                </NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                                } to="/Aboutus">ABOUT US</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                                } to="/ContactPage">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;