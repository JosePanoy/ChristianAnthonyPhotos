import React from 'react';
import '../src/assets/css/component2.css';
import pic1 from '../src/assets/img/pic1.jpg';
import pic2 from '../src/assets/img/pic2.jpg';

import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Component2() {
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
        delay: 500,
    });

    const fadeInLeft1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 300,
    });

    const fadeInLeft2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 500,
    });

    const fadeInLeft3 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 700,
    });

    const fadeInLeft4 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 900,
    });

    const fadeInLeft5 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 1000, easing: easings.linear },
        delay: 1100,
    });




    return (
        <animated.div ref={ref} className="component2-container">


            <animated.div className="component2-top-row">

                <animated.img src={pic1} style={fadeInFromBottom1} alt="Top" className="component2-top-image" />



                <animated.div style={fadeInLeft1} className="component2-main-caption">
                    If you are a Sepaktakraw player, please join the challenge of posting a Sepaktakraw photo. Just one picture, no description. Please copy the text in your status, post a picture and look at some great memories/pictures.
                </animated.div>

            </animated.div>


            <animated.div className="component2-bottom-row">


                <animated.div className="component2-left-box">
                    <animated.img style={fadeInFromBottom2} src={pic2} alt="Bottom Left" className="component2-left-image" />
                </animated.div>



                <animated.div className="component2-right-box">


                <animated.p style={{ ...fadeInLeft2, textAlign: 'center' }}>
                    <strong>A former member of Ilo-ilo Sepak Takraw Legendary Striker & One of the Best Spiker in Ilo-ilo Western Visayas</strong>
                </animated.p>

                <animated.p style={{ ...fadeInLeft2, textAlign: 'center' }}>
                    <strong>" The Pride of Ilo-ilo Western Visayas VI"</strong>
                </animated.p>



                    <animated.h3 style={fadeInLeft3}>Achievements:</animated.h3>
                    <animated.p style={fadeInLeft3}><strong>Highschool:</strong></animated.p>
                    <animated.ul style={fadeInLeft3}>
                        <li>2005 Palarong Pambansa Champion 🥇</li>
                        <li>2006 Palarong Pambansa Silver 🥈</li>
                    </animated.ul>



                    <animated.p style={fadeInLeft4}><strong>College:</strong></animated.p>
                    <animated.ul style={fadeInLeft4}>
                        <li>2007 National PRISAA Bronze 🥉</li>
                        <li>2008 National PRISAA Silver 🥈</li>
                        <li>2009 National PRISAA Gold 🥇</li>
                        <li>2009 National PRISAA Best Spiker 🥇🏅</li>
                        <li>2010 National Dual Meet Runner-up 🥈</li>
                    </animated.ul>


                    <animated.p style={fadeInLeft5}><strong>Tournaments:</strong></animated.p>
                    <animated.ul style={fadeInLeft5}>
                        <li>POF Qualifying Champion 🥇</li>
                        <li>National POF Champion 🥇</li>
                        <li>23rd King’s Cup Thailand Bronze 🥉</li>
                    </animated.ul>
                </animated.div>
            </animated.div>


        </animated.div>
    );
}

export default Component2;
