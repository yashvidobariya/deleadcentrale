import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
    const [togglemenu, settogglemenu] = useState(false);
    const location = useLocation();

    const handletogglemenu = () => {
        settogglemenu(!togglemenu);
    };

    const handleLinkClick = () => {
        if (togglemenu) {
            settogglemenu(false);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".header-nav li", {
            y: -100,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            opacity: 0
        });
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".header-icon img", {
            y: -100,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            opacity: 0
        });
    }, []);

    return (
        <div>
            <div className="main-header">
                <div className="header-section">
                    <div className="header-icon">
                        <img src='./imge/header-icon.png' alt="Header Icon" />
                    </div>
                    <div className={`header-nav ${togglemenu ? "active" : ""}`}>
                        <li>
                            <Link to="/"
                                className={location.pathname === "/" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/price"
                                className={location.pathname === "/price" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                Price
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className={location.pathname === "/contact" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/login"
                                className={location.pathname === "/login" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                Login
                            </Link>
                        </li>
                    </div>
                </div>
                <div className="toggle-menu">
                    {togglemenu ? (
                        <RxCross2 onClick={handletogglemenu} />
                    ) : (
                        <IoMenu onClick={handletogglemenu} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
