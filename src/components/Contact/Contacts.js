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
      <div className="c">
      <div className="c-bg"></div>
      <div  data-aos="fade-up"
                        // data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="2000" className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
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
          data-aos="zoom-in-up"
          // data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
        className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
    );
};

export default Contacts;