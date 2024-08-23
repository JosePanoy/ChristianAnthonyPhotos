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

    const fadeInFromLeft = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000 },
        delay: 300,
    });

    const Box = ({ src, alt, href, delay }) => {
        const { ref: boxRef, inView: boxInView } = useInView({
            triggerOnce: false,
            threshold: 0.1,
        });

        const fadeInFromBottom = useSpring({
            opacity: boxInView ? 1 : 0,
            transform: boxInView ? 'translateY(0)' : 'translateY(70px)',
            config: { duration: 1000 },
            delay,
        });

        return (
            <animated.a
                ref={boxRef}
                style={fadeInFromBottom}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="box"
            >
                <img src={src} alt={alt} />
                <FaRegCopy className="copy-icon" />
            </animated.a>
        );
    };

    return (
        <>
            <animated.div ref={ref} className="bottom-container">
                <animated.div style={fadeInFromLeft} className="bottom-caption">
                    Providing professional photography services for weddings, lifestyle shoots, events, and burials. We specialize in capturing the essence of each moment with precision and care, ensuring your memories are beautifully preserved for a lifetime.
                </animated.div>
                <div className="bottom-boxes">
                    <Box src={pic1} alt="Portrait 1" href="https://www.facebook.com/media/set/?set=a.936704545129681&type=3" delay={300} />
                    <Box src={pic2} alt="Portrait 2" href="https://www.facebook.com/media/set/?set=a.942202194579916&type=3" delay={600} />
                    <Box src={pic3} alt="Portrait 3" href="https://www.facebook.com/media/set/?set=a.1002273608572774&type=3" delay={900} />
                    <Box src={pic4} alt="Portrait 4" href="https://www.facebook.com/media/set/?set=a.984658023667666&type=3" delay={1200} />
                    <Box src={pic5} alt="Portrait 5" href="https://www.facebook.com/media/set/?set=a.961691945964274&type=3" delay={1500} />
                    <Box src={pic6} alt="Portrait 6" href="https://www.facebook.com/media/set/?set=a.967054408761361&type=3" delay={1800} />
                </div>
            </animated.div>
        </>
    );
}

export default BottomComponent;
