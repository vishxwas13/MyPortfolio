import React, { useRef, useState } from 'react'
import './Contact.css'
import whatsapp from '../../img/whatsapp-icon.png'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(props) {
  const form = useRef();
  const [showText,setText] = useState();
  const [showMail,setMail] = useState();
  const [showMessage,setMessage] = useState();
  const [flag,setFlag] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setFlag(true);
    emailjs.sendForm('service_am9hdo5', 'template_k6rx4rn', form.current, 'Z2HfR2M-bC0fjIGHb')
      .then((result) => {
        setText("");setMail("");setMessage("");
        alert("Sent successfully ✔️ Vishwas has sent you an email, please check 🙏🏻")
        setFlag(false)
      }, (error) => {
          setText(showText);setMail(showMail);setMessage(showMessage);
          alert("Submition Failed! ❌,Check your connection 🙏🏻 or try again later 🤌")
          // console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id='Contact'>
      <div className="left-services">
            <span style={{color: props.currTheme? 'revert': 'black'}} data-aos="slide-up"> Impressed ? </span>
            <span data-aos="slide-up" style={{fontSize: '2.5rem'}}>Get in touch !</span>
            <span style={{color: props.currTheme? 'var(--gray)':'grey'}} data-aos="slide-up"> If my profile looks great to you, please out fill this form.
            <br/> Let's Start a Conversation 😊.
            </span>
           <a href="https://wa.me/+918279510767/?text=Hello, I am your_name, from place/organization, your_message"><button className="cv-btn hire-me wp" data-aos="flip-up">WhatsApp <img src={whatsapp} alt="" className='whatsapp-icon'/></button> </a>
       </div>
       <div className="right-contact" data-aos="zoom-in">
         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" onChange={showText} className="user-name" placeholder="Name" value={showText} required/>
            {/* <input type="tel" name="phone" className="user-name" placeholder="Phone number"/> */}
            <input type="email" name="user_mail" onChange={showMail}className="user-name" placeholder="Email" value={showText}/>
            <textarea name="message" id="" cols="30" rows="10" onChange={showMessage} className="user-name" placeholder="Message" value={showText}></textarea>
              {flag && <div class="loader"></div> }
            <button type="submit">Send</button>
            <div className="blur" style={{background:"skyblue", top:'0rem',left:'10rem'}}></div>
         </form>
       </div>
    </div>
  )
}

export default Contact
