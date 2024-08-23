import React from 'react';
import Slider from "react-slick";
import '../src/assets/css/landscape.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import L1 from '../src/assets/img/landscape/l1.jpg';
import L2 from '../src/assets/img/landscape/l2.jpg';
import L3 from '../src/assets/img/landscape/l3.jpg';
import L4 from '../src/assets/img/landscape/l4.jpg';
import L5 from '../src/assets/img/landscape/l5.jpg';
import L6 from '../src/assets/img/landscape/l6.jpg';
import L7 from '../src/assets/img/landscape/l7.jpg';
import L8 from '../src/assets/img/landscape/l8.jpg';
import L9 from '../src/assets/img/landscape/l9.jpg';
import L10 from '../src/assets/img/landscape/l10.jpg';
import L12 from '../src/assets/img/landscape/l12.jpg';
import L13 from '../src/assets/img/landscape/l13.jpg';
import L14 from '../src/assets/img/landscape/l14.jpg';
import L15 from '../src/assets/img/landscape/l15.jpg';
import L16 from '../src/assets/img/landscape/l16.jpg';
import L17 from '../src/assets/img/landscape/l17.jpg';
import L18 from '../src/assets/img/landscape/l18.jpg';
import L19 from '../src/assets/img/landscape/l19.jpg';
import L20 from '../src/assets/img/landscape/l20.jpg';
import L21 from '../src/assets/img/landscape/l21.jpg';
import L22 from '../src/assets/img/landscape/l22.jpg';
import L23 from '../src/assets/img/landscape/l23.jpg';
import L24 from '../src/assets/img/landscape/l24.jpg';
import L25 from '../src/assets/img/landscape/l25.jpg';
import L26 from '../src/assets/img/landscape/l26.jpg';
import L27 from '../src/assets/img/landscape/l27.jpg';
import L28 from '../src/assets/img/landscape/l28.jpg';
import L29 from '../src/assets/img/landscape/l29.jpg';
import L30 from '../src/assets/img/landscape/l30.jpg';
import L31 from '../src/assets/img/landscape/l31.jpg';
import L32 from '../src/assets/img/landscape/l32.jpg';

const photos = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L12, L13, L14, L15, L16, L17, L18, L19, L20, L21, L22, L23, L24, L25, L26, L27, L28, L29, L30, L31, L32];

function LandScape() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  const fadeInImage = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 850 }
  });

  const fadeInHeading = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 850, delay: 1000 }
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
  };

  return (
    <animated.div ref={ref} style={fadeInImage} className="landscape-container">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Landscape ${index + 1}`} className="landscape-image" />
          </div>
        ))}
      </Slider>
    </animated.div>
  );
}

export default LandScape;
