import './contact.css'
import Phone from '../../img/phone.png'
import Address from '../../img/address.png'
import Email from '../../img/email.png'
// ghfbvmyiijhnu6 pass
//service_dezlixl id
//https://alamin7al.github.io/app-lab/
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
    
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
        <div id='contact' className="c fc">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div
          data-aos="fade-down"
          // data-aos-easing="linear"
          data-aos-duration="1500"
         className="c-left">
          <h1 className="c-title text-capitalize text-success fs-1">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon text-success" />
              <div className=" fs-5">
                01703754409
              </div>
            </div>
            <div className="c-info-item">
              <img className="c-icon " src={Email} alt="" />
              <div className="fs-5">
              alaminn@gmail.com
               
              </div>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              <div className="fs-5">
              Dhaka Bangladesh
               
              </div>
            </div>
          </div>
        </div>
        <div 
        // data-aos="fade-left"
        // data-aos-duration="3000"
        data-aos="fade-up"
     data-aos-duration="3000"
        className="c-right">
          <p className="c-desc fs-5">
            <b className='text-success fs-2'>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input className='fs-5 b' type="text" placeholder="Name" name="user_name" />
            <input className='fs-5 b' type="text" placeholder="Subject" name="user_subject" />
            <input className='fs-5 b' type="text" placeholder="Email" name="user_email" />
            <textarea  className='fs-5 b'  rows="5" placeholder="Message" name="message" />
            <button className='btn btn-outline-success btn-lg'>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
    );
};

export default Contacts;