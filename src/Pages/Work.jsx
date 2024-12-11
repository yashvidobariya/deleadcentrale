import React from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

const Work = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",
        scrub: true,

      },
    });

    tl.from(".timeline-item", {
      y: -100,
      duration: 1,
      stagger: 0.15,
      delay: 0.2,
      opacity: 0,
    });
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-circle">  <img src="./imge/1.png" /></div>
          <h2>Your wishes and needs</h2>
          <div className="timeline-content">
            <p>We start with a conversation to understand what types of leads you are looking for and in which region you are active. We tailor the lead generation to your specific needs.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/2.png" />
          </div>
          <h2>Lead generation</h2>
          <div className="timeline-content">
            <p>We collect leads from customers who are looking for sustainable solutions such as insulation, charging stations, solar panels or home batteries. We use advanced techniques to ensure that the leads are of high quality.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/3.png" />
          </div>
          <h2>Voice log recording:</h2>
          <div className="timeline-content">
            <p>Every lead we deliver contains a voice log recording, in which it is clear that the customer agrees to receive a quote. This gives your company the certainty that you are working with a well-informed customer.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/4.png" />
          </div>
          <h2>Receiving leads</h2>
          <div className="timeline-content">
            <p>As soon as we have collected the leads, we deliver them directly to your company. You have access to the full details of the lead and the voice log recording, so that you can approach the customer directly.</p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/5.png" />
          </div>
          <h2>Increased conversion</h2>
          <div className="timeline-content">
            <p> With qualified leads and the associated customer approval records, you can optimize your sales efforts and improve your conversion rates.</p>
          </div>
        </div>      </div>
    </div>
  );
};

export default Work;
