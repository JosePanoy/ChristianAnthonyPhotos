import React from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/assets/css/portrait.css';

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

function Portrait() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInContainer = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 550 },
  });

  const fadeInHeading = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 550 },
  });

  const fadeInImage = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 550 },
  });

  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  
  

  return (
    <animated.div className="portrait-container" ref={ref} style={fadeInContainer}>
      <animated.h2 style={fadeInHeading}>Portrait Photos</animated.h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <animated.img
              src={img}
              alt={`Portrait ${index + 1}`}
              style={fadeInImage}
            />
          </div>
        ))}
      </Slider>
    </animated.div>
  );
}

export default Portrait;
