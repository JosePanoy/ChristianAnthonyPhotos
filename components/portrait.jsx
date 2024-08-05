import React, { useState, useEffect } from 'react';
import '../src/assets/css/portrait.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import p1 from '../src/assets/img/portrait/p1.jpg';
import p2 from '../src/assets/img/portrait/p2.jpg';
import p3 from '../src/assets/img/portrait/p3.jpg';
import p4 from '../src/assets/img/portrait/p4.jpg';
import p5 from '../src/assets/img/portrait/p5.jpg';
import p6 from '../src/assets/img/portrait/p6.jpg';
import p7 from '../src/assets/img/portrait/p7.jpg';
import p8 from '../src/assets/img/portrait/p8.jpg';
import p9 from '../src/assets/img/portrait/p9.jpg';
import p10 from '../src/assets/img/portrait/p10.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

function Portrait() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeEffect(false); 
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        setFadeEffect(true); 
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageForSlot = (offset) => {
    return images[(currentIndex + offset) % images.length];
  };

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const fadeSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 850 },
  });

  return (
    <animated.div className="portrait-container" ref={ref} style={fadeSpring}>
      <h2>Portrait Photos</h2>
      <div className="grid">
        {[0, 1, 2, 3].map(index => (
          <div className="cell" key={index}>
            <img src={getImageForSlot(index)} alt={`Portrait ${index + 1}`} className={`fade ${fadeEffect ? 'fade-in' : 'fade-out'}`} />
          </div>
        ))}
      </div>
    </animated.div>
  );
}

export default Portrait;
