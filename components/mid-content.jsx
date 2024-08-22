import React from 'react';
import '../src/assets/css/mid-content.css';

import pic1 from '../src/assets/img/midcontent/a.jpg';
import pic2 from '../src/assets/img/midcontent/b.jpg';
import pic3 from '../src/assets/img/midcontent/c.jpg';
import pic4 from '../src/assets/img/midcontent/d.jpg';
import pic5 from '../src/assets/img/midcontent/e.jpg';
import pic6 from '../src/assets/img/midcontent/f.jpg';

import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function MidContent() {

    const createFadeIn = (delay) => {
        const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.1,
        });
    
        const animation = useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            config: { duration: 700, easing: easings.linear },
            delay,
        });
    
        return { ref, animation };
    };

    const pic1Fade = createFadeIn(300);
    const caption1Fade = createFadeIn(400);
    const pic2Fade = createFadeIn(500);
    const caption2Fade = createFadeIn(600);
    const pic3Fade = createFadeIn(700);
    const caption3Fade = createFadeIn(800);
    const pic4Fade = createFadeIn(900);
    const caption4Fade = createFadeIn(1000);
    const pic5Fade = createFadeIn(1200);
    const caption5Fade = createFadeIn(1300);
    const pic6Fade = createFadeIn(1400);
    const caption6Fade = createFadeIn(1500);

    return (
        <div className="container">
            <animated.div ref={pic1Fade.ref} style={pic1Fade.animation} className="pic1"><img src={pic1} alt="pic1" /></animated.div>
            <animated.div ref={caption1Fade.ref} style={caption1Fade.animation} className="caption1">
                <h2>Celebrating a milestone with friends: A beautiful 18th debut, full of joy and cherished memories.</h2>
            </animated.div>
            <animated.div ref={pic2Fade.ref} style={pic2Fade.animation} className="pic2"><img src={pic2} alt="pic2" /></animated.div>
            <animated.div ref={caption2Fade.ref} style={caption2Fade.animation} className="caption2">
                <h2>A timeless moment captured: A couple's love story told through a stunning prenup session.</h2>
            </animated.div>
            <animated.div ref={pic3Fade.ref} style={pic3Fade.animation} className="pic3"><img src={pic3} alt="pic3" /></animated.div>
            <animated.div ref={caption3Fade.ref} style={caption3Fade.animation} className="caption3">
                <h2>Embracing the past: Old friends reunited in a heartwarming hug, celebrating the bond of friendship.</h2>
            </animated.div>
            <animated.div ref={pic4Fade.ref} style={pic4Fade.animation} className="pic4"><img src={pic4} alt="pic4" /></animated.div>
            <animated.div ref={caption4Fade.ref} style={caption4Fade.animation} className="caption4">
                <h2>Blessings and smiles: A baby's baptism surrounded by joy and love, with everyone sharing in the sacred moment.</h2>
            </animated.div>
            <animated.div ref={pic5Fade.ref} style={pic5Fade.animation} className="pic5"><img src={pic5} alt="pic5" /></animated.div>
            <animated.div ref={caption5Fade.ref} style={caption5Fade.animation} className="caption5">
                <h2>Welcoming a new beginning: A house blessing ceremony, bringing warmth and positivity to a new home.</h2>
            </animated.div>
            <animated.div ref={pic6Fade.ref} style={pic6Fade.animation} className="pic6"><img src={pic6} alt="pic6" /></animated.div>
            <animated.div ref={caption6Fade.ref} style={caption6Fade.animation} className="caption6">
                <h2>Elegance by the river: A debutante’s special moment captured against the serene beauty of a riverside backdrop.</h2>
            </animated.div>
        </div>
    );
}

export default MidContent;
