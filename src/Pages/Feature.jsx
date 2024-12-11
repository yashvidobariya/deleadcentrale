import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlEnergy } from "react-icons/sl";
import featureData from "../data/Facility.json";
import { useGSAP } from "@gsap/react";
import { FaChargingStation } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";
import { GiBatteries } from "react-icons/gi";

const iconMap = {
    SlEnergy: <SlEnergy />,
    FaChargingStation: <FaChargingStation />,
    GiSolarPower: <GiSolarPower />,
    GiBatteries: <GiBatteries />
};

const WhyLeadCentral = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".why-lead-central",
                scrub: true,
            },
        });

        tl.from(".features", {
            opacity: 0,
            scale: 0,
            duration: 1,
        });

    }, []);


    return (
        <div className="why-lead-central">
            <h2>Our Services</h2>
            <div className="features">
                {featureData.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{iconMap[feature.icon]}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.points}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WhyLeadCentral;
