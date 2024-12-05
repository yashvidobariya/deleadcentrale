import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaClock, FaMapMarkerAlt, FaCoins } from "react-icons/fa";
import featureData from "../data/Facility.json";

const iconMap = {
    FaClock: <FaClock />,
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaCoins: <FaCoins />,
};

const WhyLeadCentral = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".features", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            scale: 0.2,
        });
    }, []);

    return (
        <div className="why-lead-central">
            <h2>Waarom De Lead Centrale</h2>
            <div className="features">
                {featureData.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{iconMap[feature.icon]}</div>
                        <h3>{feature.title}</h3>
                        <ul>
                            {feature.points.map((point, i) => (
                                <p key={i}>{point}</p>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyLeadCentral;
