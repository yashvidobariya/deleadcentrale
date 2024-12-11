import React from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Facility = () => {

    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const facilityItems = gsap.utils.toArray(".facility-subcontent");
    //     gsap.from(facilityItems, {
    //         scrollTrigger: {
    //             trigger: ".facility-section",
    //             start: "top 100%",
    //             end: "top -20%",
    //             scrub: true,
    //         },
    //         y: (i) => (i % 2 === 0 ? -150 : 50),
    //         x: (i) => (i < 2 ? (i % 2 === 0 ? -150 : 50) : (i % 2 === 0 ? 50 : 150)),
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 0.2,
    //     });
    // }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".facility-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });

        tl.from("#facility-color", {
            duration: 0.9,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
        })
            .from("#facility-color h1", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })
            .from("#facility-color p", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })
            .from("#facility-animate", {
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power4.out",
            });
    }, []);


    return (
        <div className='facility-main'>
            <div className="facility-section">
                <div className="facility-title">
                    <h1>Why choose Verified Leads?</h1>
                </div>
                <div className="facility-content">
                    <div className="facility-card">
                        <div className="facility-subcontent" id="facility-animate">
                            <h1>Sustainable and qualified leads</h1>
                            <p>We ensure that the leads we deliver are relevant and well-informed. Through advanced targeting techniques, we generate leads from customers who are genuinely interested in sustainable solutions such as insulation, charging stations, solar panels and home batteries.</p>
                        </div>

                        <div className="facility-subcontent" id="facility-color">
                            <h1>Transparency with voice log recordings</h1>
                            <p>Every lead comes with a voice log recording in which the customer has given his or her approval to receive a quote. This offers complete transparency and peace of mind for your sales team.</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <div className="facility-subcontent" id="facility-color">
                            <h1>Higher conversion rates</h1>
                            <p>By delivering leads that have already actively shown interest and explicitly given their consent, your team can focus on warm prospects and increase the chance of successful conversions.</p>
                        </div>

                        <div className="facility-subcontent" id="facility-animate">
                            <h1>Saves time</h1>
                            <p>Instead of spending time on cold calling and finding the right prospects, we deliver qualified leads that are ready for follow-up. This allows you to focus on what really matters: closing deals.
                                How does it work?</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility