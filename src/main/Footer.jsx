import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">

                    <div className="footer-icons">
                        <img src='./imge/footer.png' />
                        <img src='./imge/header-icon.png' />
                    </div>

                    <ul className="footer-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2024 De Lead Centrale | Webdesign door webbureau ditisABC
                </p>
            </div>
        </footer>
    );
};

export default Footer;
