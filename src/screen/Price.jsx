import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import anime from "animejs";

const Price = () => {

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".price-title h1", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power4.out",
        }).from(".card-header", {
            y: -100,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            opacity: 0
        })
    }, []);

    // useGSAP(() => {
    //     anime.timeline({ loop: true })
    //         .add({
    //             targets: ".price-title h1 .letter",
    //             scale: [0, 1],
    //             duration: 1500,
    //             elasticity: 600,
    //             delay: (el, i) => 45 * (i + 1)
    //         })
    //         .add({
    //             targets: ".price-title h1 ",
    //             opacity: 0,
    //             duration: 1000,
    //             easing: "easeOutExpo",
    //             delay: 1000
    //         });
    // }, []);

    const plans = [
        {
            title: 'Basic',
            price: '$256',
            features: ['5 leads', '2 Lead Free', 'EURO 53 / Lead', 'GEEN MAANDELIJKSE', 'KOSTEN'],
            color: "#368190",
        },
        {
            title: 'Standard',
            price: '$500',
            features: ['10 leads', '5 Lead Free', 'EURO 50 / Lead', 'GEEN MAANDELIJKSE', 'KOSTEN'],
            color: "#367990",
        },
        {
            title: 'Pro',
            price: '$940',
            features: ['20 leads', '10 Lead Free', 'EURO 47 / Lead', 'GEEN MAANDELIJKSE', 'KOSTEN'],
            color: "#2b6071",
        }
    ];

    return (
        <div className="price-section">
            <div className="price-title">
                <h1>Packages </h1>
                <p>all leads include voicelogs
                </p>
            </div>
            <div className="pricing-container">
                {plans.map((plan, index) => (
                    <div className="pricing-card" key={index} >
                        <div className="card-header" >
                            <h3 className='plan-titleh3' style={{ backgroundColor: plan.color }}>{plan.title}<p className='planprice'>{plan.price}</p></h3>
                            {/* <h2>{plan.price}</h2> */}
                            <ul className="card-features">
                                {plan.features.map((feature, featureIndex) => (
                                    <div className="pricing-content">
                                        <IoIosCheckmarkCircle className='tick-features' />
                                        <p key={featureIndex}>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </ul>
                            <div className="card-button">
                                <button >SELECT PLAN</button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>

    );
};

export default Price;
