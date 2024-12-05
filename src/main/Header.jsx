import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Home from '../Pages/Home';
import Process from '../Pages/Process';
import Feature from '../Pages/Feature';
import Facility from '../Pages/Facility';
import Contact from '../Pages/Contact';
import Footer from './Footer';
import { gsap } from 'gsap';

const Header = () => {
    const [togglemenu, settogglemenu] = useState(false);

    const handletogglemenu = () => {
        settogglemenu(!togglemenu);
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from("li", {
            y: -130,
            duration: 1,
            stagger: 0.1,
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
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Login</li>
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
            <Home />
            <Process />
            <Facility />
            <Feature />
            <Contact />
            <Footer />
        </div>
    );
};

export default Header;
