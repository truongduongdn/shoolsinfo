import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    let item_link_all= 'item_link_all'; 
    return (
        <div className='header_page'>
            <nav className="navbar navbar-expand-sm header_navbar">
                <a className='header_logo'> SCHOOL-INFO </a>
                <i className="fa fa-graduation-cap icon_main-nav"></i>
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                            }
                            to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                        } to="/allschool">
                            ALL SCHOOL
                        <div classNme='nav-item_hover'>
                            <div className='nav-item_hover-link'>
                                
                            </div>
                        </div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                        } to="/aboutus">ABOUT US</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
                        } to="/contact">CONTACT</NavLink>
                    </li>
                </ul>
                <a className='link_happy'>
                    <i class="fa fa-book fa-2x icon_header "></i>
                </a>
            </nav>
        </div>
    );
}

export default Header;