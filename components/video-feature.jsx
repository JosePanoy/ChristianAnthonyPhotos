import React from 'react';
import mp4vid from '../src/assets/video/1.mp4';
import '../src/assets/css/video-feature.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function MP4Feature() {

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

    return (
        <animated.div ref={ref} style={fadeInFromBottom1} className="video-container">
            <video src={mp4vid} muted autoPlay loop className="video-player">
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="caption">
                <h2>Documenting the depth and significance of every chapter in your journey.</h2>
            </div>
        </animated.div>
    );
}

export default MP4Feature;
