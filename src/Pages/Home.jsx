import React from 'react';
import { color, delay, motion } from "framer-motion";
import { Wave } from 'react-animated-text';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Process from './Process';
import Feature from './Feature';
import Work from './Work'
import Facility from './Facility';
import Contact from './Contact';
import anime from 'animejs/lib/anime.es.js';

const Home = () => {
    // useGSAP(() => {
    //     const tl = gsap.timeline();
    //     tl.from("#home-contenth1", {
    //         x: -100,
    //         duration: 1,
    //         stagger: 0.1,
    //         opacity: 0
    //     });
    // }, []);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".home-bg img", {
            duration: 2,
            yPercent: -20,
            opacity: 0,
            ease: "power4.out",
        }).from("#home-contentp", {
            duration: 0.5,
            x: -50,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".home-button", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })

    }, []);

    useGSAP(() => {
        anime.timeline({ loop: true })
            .add({
                targets: '#home-contenth1',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: 1000
            }).add({
                targets: '#home-contenth1',
                scaleY: [1, 0],
                color: 'red',
                opacity: [1, 0],
                easing: "easeOutExpo",
                duration: 1000,
                delay: 1000
            })
    }, []);


    return (
        <>
            <div className='home-main'>
                <div className="home-section">
                    <div className="home-flex">
                        <div className="home-content"  >
                            <p id='home-contenth1'>Welcome to Verified <br /> Leads Sustainable Leads with Full Transparency</p>
                            <p id='home-contentp'>At Verified Leads, we offer companies in the sustainable sector access to high-quality leads focused on products such as insulation, charging stations, solar panels and home batteries. What sets us apart from other lead generators is our focus on transparency and reliability. Every lead we deliver comes with a voice log recording, so you know for sure that the customer has agreed to receive a quote. This allows you to efficiently focus your sales efforts on qualified and well-informed prospects.</p>
                            <div className="home-button">
                                <button className="signup-btn">Meld je aan</button>
                                <button className="login-btn">Login op ons platform</button>
                            </div>
                        </div>

                        <div

                            className="home-bg"
                        >
                            <img src='./imge/home-bg.png' alt="background" />
                        </div>

                    </div>
                </div>

            </div>
            <Process />
            <Feature />
            <Work />
            <Facility />
            <Contact />
        </>
    );
}

export default Home;
