import React from 'react';
import { motion } from "framer-motion";
import { Wave } from 'react-animated-text';

const Home = () => {
    return (
        <div className='home-main'>
            <div className="home-section">
                <div className="home-flex">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="home-content">
                        <p id='home-contenth1'>Leverancier van gekwalificeerde leads voor zonnepanelen en energieopslag</p>
                        <p> <Wave text="Vind hier jouw klanten!" effect="fadeOut" /></p>
                        <div className="home-button">
                            <button className="signup-btn">Meld je aan</button>
                            <button className="login-btn">Login op ons platform</button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="home-bg">
                        <img src='./imge/home-bg.png' alt="background" />
                    </motion.div>

                </div>
            </div>

        </div>
    );
}

export default Home;
