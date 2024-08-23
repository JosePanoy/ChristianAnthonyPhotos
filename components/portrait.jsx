import React from 'react';
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
  return (
    <div className="portrait-grid">
      {images.map((img, index) => (
        <FadeInImage key={index} src={img} />
      ))}
    </div>
  );
}

function FadeInImage({ src }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { tension: 280, friction: 60, duration: 500 }
  });

  return (
    <animated.div className="portrait-item" ref={ref} style={props}>
      <img src={src} alt="" />
    </animated.div>
  );
}

export default Portrait;
