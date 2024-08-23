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
import p11 from '../src/assets/img/portrait/p11.jpg';
import p12 from '../src/assets/img/portrait/p12.jpg';
import p13 from '../src/assets/img/portrait/p13.jpg';
import p14 from '../src/assets/img/portrait/p14.jpg';
import p15 from '../src/assets/img/portrait/p15.jpg';
import p16 from '../src/assets/img/portrait/p16.jpg';
import p17 from '../src/assets/img/portrait/p17.jpg';
import p18 from '../src/assets/img/portrait/p18.jpg';
import p19 from '../src/assets/img/portrait/p19.jpg';
import p20 from '../src/assets/img/portrait/p20.jpg';
import p21 from '../src/assets/img/portrait/p21.jpg';
import p22 from '../src/assets/img/portrait/p22.jpg';
import p23 from '../src/assets/img/portrait/p23.jpg';
import p24 from '../src/assets/img/portrait/p24.jpg';
import p25 from '../src/assets/img/portrait/p25.jpg';
import p26 from '../src/assets/img/portrait/p26.jpg';
import p27 from '../src/assets/img/portrait/p27.jpg';
import p28 from '../src/assets/img/portrait/p28.jpg';
import p29 from '../src/assets/img/portrait/p29.jpg';
import p30 from '../src/assets/img/portrait/p30.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30];

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
