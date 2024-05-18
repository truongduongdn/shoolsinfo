import React from 'react';
import style from '../styles/footer.module.css';
import logo from '../asset/img/ShoolsINfo.png';


function Footer(props) {
    return (
        <div>
            <div className={style.footer_container}>
                <div className={style.logo_container}>
                    <img src={logo} alt="Logo" className={style.ft_logo} />
                    <div className={`${style.logo_container} ${style.logo_contain}`}>

                        <h3>Discover, Decide, Excel: Empowering Education with SchoolsInfo.</h3>

                        <ul>
                            <li><i className="fas fa-envelope"></i><a href="mailto:info@schoolsinfo.com">info@schoolsinfo.com</a></li>
                            <li><i className="fas fa-phone"></i>+84 12345 12 11</li>
                            <li><i className="fas fa-clock"></i> On Time Every Time</li>
                        </ul>

                    </div>

                </div>
                <div classname={style.ft_home}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div classname={style.ft_aboutUs}>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div classname={style.ft_contactUs}>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Map &Direction </a></li>
                    </ul>
                </div>

            </div>

            <div className={style.footer_bottom}>
                <p>SchoolsInfo. &copy; [2024] All rights reserved.</p>
                <p><a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a></p>
            </div>
        </div>

    );
}

export default Footer;