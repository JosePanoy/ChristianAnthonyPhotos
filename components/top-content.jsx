import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import '../src/assets/css/top-content.css';
import ProfilePic from '../src/assets/img/profile.png';
import FbLogo from '../src/assets/img/fblogo.gif';

function TopContent() {

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const fadeInLeft1 = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { duration: 850 },
    reset: true,
  });

  const fadeInLeft2 = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { duration: 1000 },
    reset: true,
  });

  const fadeInLeft3 = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { duration: 1100 },
    reset: true,
  });

  const fadeInLeft4 = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { duration: 1150 },
    reset: true,
  });

  const fadeInImage = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1300 },
    reset: true,
  });

  return (
    <animated.div ref={ref} className="top-content" style={fadeInImage}>
      <div className="unique-container">
        <div className="text-section">
          <animated.h1 style={fadeInLeft1}>Christian Anthony Photos</animated.h1>
          <animated.h3 style={fadeInLeft2}>Weddings, Events, and Lifestyle</animated.h3>
          <animated.div style={fadeInLeft2} className="aesthetic-line"></animated.div>
          <animated.p style={fadeInLeft3}>
            Capturing life's most cherished moments with precision and passion. Our photography services offer a blend of artistry and professionalism, ensuring each frame reflects the true essence of your special events. From intimate weddings to grand celebrations, we deliver high-quality images that tell your unique story.
          </animated.p>
          <animated.div style={fadeInLeft4} className="social-contact">
            <img src={FbLogo} alt="Facebook Logo" className="fb-logo" />
            <button className="contact-button">
              Contact Me
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
              </svg>
            </button>
          </animated.div>
        </div>
        <div className="image-section">
          <animated.img src={ProfilePic} alt="Christian Anthony" style={fadeInImage} />
        </div>
      </div>
    </animated.div>
  );
}

export default TopContent;
