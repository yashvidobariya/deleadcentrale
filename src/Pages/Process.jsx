import { useGSAP } from '@gsap/react';
import React from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Process = () => {
    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.process-content',
    //             start: 'top 40%',
    //             end: 'end 10%',
    //             scrub: true,
    //         },
    //     });

    //     tl.from('.process-content', {
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 0.1,
    //     });
    // }, []);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".process-flex",
                start: "top 80%",
                end: "bottom 20%",

            },
        });

        tl.from("process-img img", {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".process-content h1", {
                duration: 1,
                y: -50,
                opacity: 0,
                ease: "power4.out",
            })
            .from(".process-content p", {
                duration: 2,
                y: -150,
                opacity: 0,
                ease: "power4.out",
            })
        // .from("#facility-animate", {
        //     duration: 1,
        //     x: -50,
        //     opacity: 0,
        //     ease: "power4.out",
        // });
    }, []);


    return (
        <div className='process-main'>
            <div className="process-section">
                <div className="process-flex">
                    <div className="process-img">
                        <img src='./imge/power.jpg' />
                    </div>
                    <div className="process-content">
                        <h1>What are sustainable leads?</h1>
                        <p>Sustainable leads are potential customers who are seriously interested in making their home or business more sustainable. Whether it concerns energy savings through insulation, the installation of charging stations for electric vehicles, solar panels for green energy or home batteries for solar energy storage, we ensure that you only receive leads that are actually ready to take action.</p>
                        <p>What makes Verified Leads unique is that all our leads come with a voice log recording. This means you can always listen to the moment the customer has given their approval to receive a quote, ensuring maximum transparency and trust in the sales process.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
