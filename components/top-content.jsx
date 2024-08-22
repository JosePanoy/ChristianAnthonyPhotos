import React from 'react';
import '../src/assets/css/top-content.css';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function TopContent() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const fadeInFromBottom1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000 },
        delay: 300,
    });

    const fadeInFromBottom2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
        delay: 500,
    });

    const fadeInLeft1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
    });

    return (
        <animated.div ref={ref} className="top-content">
            <animated.div style={fadeInLeft1} className="top-content-text">
                <animated.h2 style={fadeInFromBottom1}>Christian Anthony Photos</animated.h2>
                <animated.p style={fadeInFromBottom2}>Wedding, Lifestyles & Events</animated.p>
            </animated.div>
        </animated.div>
    );
}

export default TopContent;
