import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import '../src/assets/css/contact.css';
import fblogo from '../src/assets/img/fb.png';
import maillogo from '../src/assets/img/mail.png';
import phonelogo from '../src/assets/img/phone.png';
import messengerlogo from '../src/assets/img/messenger.png'

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInContainer = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 850 },
  });

  const fadeInMap = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 850 },
  });

  const fadeInInfo = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 850, delay: 300 },
  });

  const fadeInMessageBox = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 850, delay: 600 },
  });

  return (
    <animated.div ref={ref} style={fadeInContainer} className="contact-container">
      <animated.div style={fadeInMap} className="contact-content">
        <div className="map-container">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2061.503176038476!2d122.43208282121935!3d10.819184166087172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1722230864916!5m2!1sen!2sph"
            style={{ border: 0, width: '100%', height: '125%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <animated.div style={fadeInInfo} className="contact-info">
        <h3>We’re Just a Message Away—Get in Touch!</h3>
          <div className="contact-info-item">
            <img src={fblogo} alt="Facebook" className="contact-logo" />
            <a href="https://www.facebook.com/profile.php?id=100063704334553" target="_blank" rel="noopener noreferrer">Christian Anthony Photos</a>
          </div>
          <div className="contact-info-item">
            <img src={messengerlogo} alt="Messenger" className="contact-logo" />
            <a href="https://www.facebook.com/messages/t/110466253902330" target="_blank" rel="noopener noreferrer">Messenger</a>
          </div>
          <div className="contact-info-item">
            <img src={phonelogo} alt="Phone" className="contact-logo" />
            <span style={{cursor: "default"}}>(+123) 456-7890</span>
          </div>
          <div className="contact-info-item">
            <img src={maillogo} alt="Email" className="contact-logo" />
            <a href="mailto:example@example.com">example@example.com</a>
          </div>

          <textarea placeholder="Message here!"></textarea>
            <button className="sendbtn">
            <span>SEND</span>
            </button>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}

export default Contact;
