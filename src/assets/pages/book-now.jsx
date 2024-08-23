import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/book-now.css';
import Navbar from '../../../components/navbar';

function BookNow() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const messageBody = `
      Name: ${formData.user_name}
      Email: ${formData.user_email}
      Phone Number: ${formData.user_phone}

      Message:
      ${formData.message}
    `;
    
    emailjs.send('service_t24juoq', 'template_zqxd4zb', {
      from_name: formData.user_name,
      from_email: formData.user_email,
      from_phone: formData.user_phone,
      message: messageBody,
    }, '40-4TAxZaeIWqoAxd')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: ''
        });
        setStep(0);
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again later.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="bookpage">
        <div className="booknow">
          {step === 0 && (
            <button className="submit-button" onClick={nextStep}>
              <span className="button-content">Book Now</span>
            </button>
          )}
          {step === 1 && (
            <>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input-field"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
              <div className="button-group">
                <button className="btn btn-primary" onClick={prevStep}>
                  <span className="btn-txt">Back</span>
                  <kbd className="btn-kbd">B</kbd>
                </button>
                <button className="btn btn-primary" onClick={nextStep}>
                  <span className="btn-txt">Next</span>
                  <kbd className="btn-kbd">N</kbd>
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input-field"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
              <div className="button-group">
                <button className="btn btn-primary" onClick={prevStep}>
                  <span className="btn-txt">Back</span>
                  <kbd className="btn-kbd">B</kbd>
                </button>
                <button className="btn btn-primary" onClick={nextStep}>
                  <span className="btn-txt">Next</span>
                  <kbd className="btn-kbd">N</kbd>
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                className="input-field"
                value={formData.user_phone}
                onChange={handleChange}
                required
              />
              <div className="button-group">
                <button className="btn btn-primary" onClick={prevStep}>
                  <span className="btn-txt">Back</span>
                  <kbd className="btn-kbd">B</kbd>
                </button>
                <button className="btn btn-primary" onClick={nextStep}>
                  <span className="btn-txt">Next</span>
                  <kbd className="btn-kbd">N</kbd>
                </button>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <textarea
                name="message"
                placeholder="Your Message"
                className="input-field message-field"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
              <div className="button-group">
                <button className="btn btn-primary" onClick={prevStep}>
                  <span className="btn-txt">Back</span>
                  <kbd className="btn-kbd">B</kbd>
                </button>
                <button className="btn btn-primary" onClick={sendEmail}>
                  <span className="btn-txt">Submit</span>
                  <kbd className="btn-kbd">S</kbd>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookNow;
