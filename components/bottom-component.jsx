import React from 'react';
import '../src/assets/css/bottom-component.css';
import { FaRegCopy } from 'react-icons/fa';
import pic1 from '../src/assets/img/portrait/angelito.jpg';
import pic2 from '../src/assets/img/portrait/jerza.jpg';
import pic3 from '../src/assets/img/portrait/mafe.jpg';
import pic4 from '../src/assets/img/portrait/shana.jpg';
import pic5 from '../src/assets/img/portrait/simone.jpg';
import pic6 from '../src/assets/img/portrait/tammara.jpg';

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function BottomComponent() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const fadeInFromBottom1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
        delay: 300,
    });

    const fadeInFromBottom2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
        delay: 600,
    });

    const fadeInFromBottom3= useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
        delay: 900,
    });

    const fadeInFromBottom4 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
        delay: 1200,
    });

    const fadeInFromBottom5 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
        delay: 1500,
    });

    const fadeInFromBottom6 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
        delay: 1800,
    });

    const fadeInFromLeft = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000 },
        delay: 300,
    });
    
    return (
        <>
            <animated.div ref={ref} className="bottom-container">
                <animated.div style={fadeInFromLeft} className="bottom-caption">
                    Providing professional photography services for weddings, lifestyle shoots, events, and burials. We specialize in capturing the essence of each moment with precision and care, ensuring your memories are beautifully preserved for a lifetime.
                </animated.div>
                <div className="bottom-boxes">
                    <animated.a style={fadeInFromBottom1} href="https://www.facebook.com/media/set/?set=a.936704545129681&type=3" target="_blank" rel="noopener noreferrer" className="box">
                        <img src={pic1} alt="Portrait 1" />
                        <FaRegCopy className="copy-icon" />
                    </animated.a>
                    <animated.a style={fadeInFromBottom2} href="https://www.facebook.com/media/set/?set=a.942202194579916&type=3" target="_blank" rel="noopener noreferrer" className="box">
                        <img src={pic2} alt="Portrait 2" />
                        <FaRegCopy className="copy-icon" />
                    </animated.a>
                    <animated.a style={fadeInFromBottom3} href="https://www.facebook.com/media/set/?set=a.1002273608572774&type=3" target="_blank" rel="noopener noreferrer" className="box">
                        <img src={pic3} alt="Portrait 3" />
                        <FaRegCopy className="copy-icon" />
                    </animated.a>
                    <animated.a style={fadeInFromBottom4} href="https://www.facebook.com/media/set/?set=a.984658023667666&type=3" target="_blank" rel="noopener noreferrer" className="box">
                        <img src={pic4} alt="Portrait 4" />
                        <FaRegCopy className="copy-icon" />
                    </animated.a>
                    <animated.a style={fadeInFromBottom5} href="https://www.facebook.com/media/set/?set=a.961691945964274&type=3" target="_blank" rel="noopener noreferrer" className="box">
                        <img src={pic5} alt="Portrait 5" />
                        <FaRegCopy className="copy-icon" />
                    </animated.a>
                    <animated.a style={fadeInFromBottom6} href="https://www.facebook.com/media/set/?set=a.967054408761361&type=3" target="_blank" rel="noopener noreferrer" className="box">
                        <img src={pic6} alt="Portrait 6" />
                        <FaRegCopy className="copy-icon" />
                    </animated.a>
                </div>
            </animated.div>
        </>
    );
}

export default BottomComponent;
