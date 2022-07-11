import React, { useState } from 'react'
import "./Contact.css"
import Phone from "../../img/Phone.png"
import Email from "../../img/Email.png"
import Address from "../../img/address.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


export const Contact = () => {
    const formRef = useRef();
    const [done,setDone] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_06r564b', 'template_oxxokj9', formRef.current, 'MzFHlzGvi4uf4gOmK')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> Let's discuss the projects </h1>
                <div className='c-info'>
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" /><b>+91 9146037055</b>
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" /><b>salonimoswal@gmail.com</b>
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" /><b>Pune, Maharashtra, India</b>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className='c-desc'>
                    Drop in your queries
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"></input>
                    <input type="text" placeholder="Subject" name="user_subject"></input>
                    <input type="text" placeholder="Email" name="user_email"></input>
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {done && "Your email has been sent"}
                </form>
            </div>
        </div>
    </div>
  )
}
