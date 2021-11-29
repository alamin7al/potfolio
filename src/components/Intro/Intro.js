import React from 'react';
import './Intro.css'
import img from '../../img/alamin2-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"



const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Al Amin</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <a className='btn btn-outline-primary' href="https://drive.google.com/uc?export=download&id=1f-HzJLSyEE5MXhefVsYVq21NpyqiID37">Download Resume</a>

          <div className="mt-5 h-25">

            <a href="https://web.facebook.com/profile.php?id=100033885724486" target='_blank'>
              <FontAwesomeIcon className='fs-1 ms-3' icon={faFacebook}>        </FontAwesomeIcon>
            </a>


            <a href="https://github.com/alamin7al" target='_blank'>

              <FontAwesomeIcon className='fs-1 ms-3' icon={faGithub}>    </FontAwesomeIcon>

            </a>



            <a href="https://www.linkedin.com/in/alaminal/" target='_blank'>
              <FontAwesomeIcon className='fs-1 ms-3' icon={faLinkedin}> </FontAwesomeIcon>
            </a>

          </div>

        </div>
      </div >
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={img} alt="" className="i-img" />
      </div>
    </div >
  );
};

export default Intro;