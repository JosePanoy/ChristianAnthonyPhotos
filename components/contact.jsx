import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import '../src/assets/css/contact.css';
import fblogo from '../src/assets/img/fb.png';
import maillogo from '../src/assets/img/mail.png';
import phonelogo from '../src/assets/img/phone.png';
import messengerlogo from '../src/assets/img/messenger.png';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    
    
    const user_name = formData.get('user_name');
    const user_email = formData.get('user_email');
    const user_phone = formData.get('user_phone');
    const message = formData.get('message');
    
  
    const messageBody = `
      Name: ${user_name}
      Email: ${user_email}
      Phone Number: ${user_phone}
  
      Message:
      ${message}
    `;
    
    emailjs.send('service_t24juoq', 'template_zqxd4zb', {
      from_name: user_name,
      from_email: user_email,
      from_phone: user_phone,
      message: messageBody,
    }, '40-4TAxZaeIWqoAxd')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again later.");
      });
    
    e.target.reset(); // Reset the form after submission
  };
  
  
  return (
    <animated.div ref={ref} style={fadeInContainer} className="contact-container">
      <animated.div style={fadeInMap} className="contact-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2061.503176038476!2d122.43208282121935!3d10.819184166087172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1722230864916!5m2!1sen!2sph"
            style={{ border: 0, width: '100%', height: '120%' }}
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
            <a href="https://www.facebook.com/messages/e2ee/t/7497245243645115" target="_blank" rel="noopener noreferrer">Messenger</a>
          </div>
          <div className="contact-info-item">
            <img src={phonelogo} alt="Phone" className="contact-logo" />
            <span style={{ cursor: "default" }}>0946 220 9589</span>
          </div>
          <div className="contact-info-item">
            <img src={maillogo} alt="Email" className="contact-logo" />
            <a href="mailto:example@example.com">Christiananthonyalejandeleon@gmail.com</a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
  
              <input type="text" name="user_name" placeholder="Your Name" id="user_name" required />
             
              <input type="email" name="user_email" placeholder="Your Email please" id="user_email" required />
             
              <input type="text" name="user_phone" placeholder="Provide your phone number" id="user_phone" required />
             
              <textarea name="message" id="message" rows="5" required placeholder="Message here!" />
             
              <button type="submit" className="sendbtn"><span>SEND</span></button>
          </form>

        </animated.div>
      </animated.div>
    </animated.div>
  );
}

export default Contact;
