import React from 'react';

const ContactUs = () => {
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
                <h2>
                    Dóór de verduurzaming vóór de verduurzaming
                </h2>
                <p>De Lead Centrale is ontstaan vanuit de vraag naar installateurs<br /> om verduurzamingen te realiseren.? We realiseren kwalitatieve<br /> leads voor partijen uit de sector.Samen met onze partner Solkunder <br /> kunnen we dit op een snelle en effectieve manier aanleveren</p>
            </div>
        </div>
    );
};

export default ContactUs;
