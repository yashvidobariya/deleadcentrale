import React, { useState } from 'react';
import { PiArrowCircleDownThin, PiArrowCircleUpThin } from 'react-icons/pi';
import processdata from '../data/process.json';
import { motion } from "framer-motion";

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="process-main">
            <div className="process-section">
                <div className="process-flex">
                    <div className="process-title">
                        <h1>Ons proces</h1>
                        <p>
                            Wij realiseren kwalitatieve leads door onze unieke strategische aanpak. We genereren,
                            valideren en leveren hoogwaardige leads van huiseigenaren voor zonnepanelen (en andere
                            energie-producten) door heel Nederland.
                        </p>
                    </div>
                    <div className="process-content">
                        {processdata.map((item, index) => (
                            <div className="process-subcontent" key={index}>
                                <div className="process-que">
                                    <h2>{item.question}</h2>
                                    {activeIndex === index ? (
                                        <PiArrowCircleUpThin
                                            className="que-icon"
                                            onClick={() => handleToggle(index)}
                                        />
                                    ) : (
                                        <PiArrowCircleDownThin
                                            className="que-icon"
                                            onClick={() => handleToggle(index)}
                                        />
                                    )}
                                </div>
                                <motiondiv>
                                    <motion.p className={`faq-p ${activeIndex === index ? 'active' : ''}`}>{item.answer}</motion.p>
                                </motiondiv>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
