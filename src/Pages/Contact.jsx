import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import scrollTrigger from "gsap/ScrollTrigger";

const ContactUs = () => {
    useGSAP(() => {
        gsap.registerPlugin(scrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-info",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });

        tl.from(".contact-info h1", {
            duration: 0.9,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".contact-info p", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })
            .from(".form-group", {
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power4.out",
            })
            .from(".submit-button", {
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power4.out",
            });

    }, []);

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label>Your Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label>Your Telefoonnumber</label>
                        <input type="email" placeholder="Enter your Telefoonnumber" />
                    </div>
                    <button type="submit" className="submit-button">
                        Volgende
                    </button>
                </form>
            </div>
            <div className="contact-info">
                <h1>
                    <span>Contact</span><br /><h5> <a>U</a>s</h5>
                </h1>
                <p>Do you have any questions or would you like to<br /> know more about how Verified Leads can help your business?<br /> Feel free to contact us at [email] or [phone number]. Our team is ready to help you further!</p>
            </div>
        </div>
    );
};

export default ContactUs;
