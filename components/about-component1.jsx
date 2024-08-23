import React from 'react'
import '../src/assets/css/component1.css'
import pic1 from '../src/assets/img/1.jpg'
import Ronaldo1 from '../src/assets/img/ronaldo-1.gif'
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Component1() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const fadeInLeft1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
    });

    const fadeInFromBottom1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
    });

    return (
        <animated.div ref={ref} className="styled-container">
            <animated.div style={fadeInFromBottom1} className="left-section">
                <img src={pic1} alt="Photographer" />
            </animated.div>
            <div className="right-section">
                <animated.h2 style={inView ? { ...fadeInLeft1, delay: 300 } : fadeInLeft1}>
                    Christian Anthony De Leon
                </animated.h2>
                <animated.p style={inView ? { ...fadeInLeft1, delay: 700 } : fadeInLeft1}>
                    Nickname: Ton-Ton
                </animated.p>
                <animated.p style={inView ? { ...fadeInLeft1, delay: 1100 } : fadeInLeft1}>
                    Address: Alimodian, Iloilo
                </animated.p>
                <animated.p style={inView ? { ...fadeInLeft1, delay: 1500 } : fadeInLeft1}>
                    Fashion: Photography, Sports (Sepak Takraw, Football)
                </animated.p>
                <animated.p style={inView ? { ...fadeInLeft1, delay: 1900 } : fadeInLeft1}>
                    Studied at: University Of Iloilo
                </animated.p>
                <img src={Ronaldo1} alt="Ronaldo" className="ronaldo-gif" />
            </div>
        </animated.div>
    )
}

export default Component1;
