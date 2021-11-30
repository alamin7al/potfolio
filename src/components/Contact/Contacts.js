import React, { useEffect } from 'react';
import './contact.css'
import Phone from '../../img/phone.png'
import Address from '../../img/address.png'
import Email from '../../img/email.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
// ghfbvmyiijhnu6 pass
//service_dezlixl id
//https://alamin7al.github.io/app-lab/
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
    // useEffect(()=>{
    //     AOS.init({
    //         offset:300,
    //         duration:1000
    //     })
    // })
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_tfyv0af",
                "template_2mdcqgh",
                formRef.current,
                "user_ggrPBGpVuVFwf9KzU7alM"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div 
                 data-aos="fade-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="300"
                 data-aos-offset="0"
                
                
                className="c-left ">
                    <h1 className="c-title text-primary">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            01703754409
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            alaminn@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Dhaka Bangladesh
                        </div>
                    </div>
                </div>
                <div 
                 data-aos="fade-up"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="300"
                 data-aos-offset="0"
                
                className="c-right">
                    <p className="c-desc fs-5">
                        <b className='fs-2 text-primary'>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button className='btn btn-primary'>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;