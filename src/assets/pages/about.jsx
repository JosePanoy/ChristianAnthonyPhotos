import React from 'react';
import '../css/about.css';
import Navbar from '../../../components/navbar';
import TakrawVid from '../video/takrawvid.mp4';
import Component1 from '../../../components/about-component1';

import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Component2 from '../../../components/about-component2';

function AboutPage() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    
      const fadeInLeft1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 500,
      });

      const fadeInLeft2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 900,
      });

    return (
        <>
            <Navbar />
            <animated.div ref={ref} className="video-section">
                <video className="video-content" src={TakrawVid} autoPlay loop muted />
                <div className="video-overlay"></div>
                <div className="video-caption">
                    <animated.h2 style={fadeInLeft1}>Christian Anthony De Leon</animated.h2>
                    <animated.p style={fadeInLeft2}>Never stop learning - Tonton🤟</animated.p>
                </div>
            </animated.div>

            <Component1 />
            <Component2 />
        </>
    );
}

export default AboutPage;
