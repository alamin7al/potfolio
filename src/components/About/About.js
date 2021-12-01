import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import './About.css'
import imgone from '../../img/Screenshot_2021-11-28-22-43-47-45-removebg-preview.png'


const About = () => {
  return (

    <div id='about' className="a  fc">
      <div
       data-aos="zoom-in"
       data-aos-easing="linear"
       data-aos-duration="1500"
      className="a-left ">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={imgone}
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div
      
      data-aos="zoom-out-down"
      data-aos-easing="linear"
      data-aos-duration="1o00"
      
      className="a-right">
        <h1 className="a-title text-success mt-4">About Me</h1>
        <div className="a-award">

          <div className="a-award-texts">
            <h4 className="a-award-title"> <small className='text-success fw-normal fw-italic fs-3'>Name </small> Al Amin</h4>
            <h4 className="a-award-title"> <small className='text-success fw-normal fw-italic fs-3'>age-</small> 20</h4>
            <h4 className="a-award-title"> <small className='text-success fw-normal fw-italic fs-3'>Qualification -</small> Bachelor of Social Science (BSS)</h4>
            <h4 className="a-award-title"> <small className='text-success fw-normal fw-italic fs-3'>post :</small>  MERN Stack Developer</h4>
            <h4 className="a-award-title"> <small className='text-success fw-normal fw-italic fs-3'>language -</small> Bangla And English</h4>
            <p className="a-award-desc">

            </p>
          </div>
        </div>
        <p className="a-sub">
          I'm a passionate web designer and developer.I believe in hard work.I am doing my work honestly.I like to learn different things and want to build a foundation of my knowledge
        </p>
        <p className="a-desc">
          I design and develop services for customers of all sizes,
          specializing in creating stylish, modern websites, web services and
          online stores.
        </p>
        <div className="my-3 ">

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
    </div>






    // <div className="a">
    //   <div className="a-left">
    //     <div className="a-card bg"></div>
    //     <div className="a-card">
    //       <img
    //         src={imgone}
    //         alt=""
    //         className="a-img"
    //       />
    //     </div>
    //   </div>
    //   <div className="a-right">
    //     <h1 className="a-title"> <small className='me'>About</small> Me</h1>
    //     <hr className='horizontal' />

    //     <div className='abouts'>
    //       <h1 className='fs-3 lh-base'>Name :Al Amin</h1>
    //       <h1 className='fs-3 lh-base'>Age : 21</h1>
    //       <h1 className='fs-3 lh-base'>qualification :Bachelor of Social Science (BSS) </h1>
    //       <h1 className='fs-3 lh-base'>POST : MERN Stack Developer </h1>
    //       <h1 className='fs-3 lh-base'>language : Bangla And English</h1>
    //     </div>
    //     <p className="a-sub fw-normal">
    //       I'ma Passionate web Designer And development and develpor. I believe in hard work. i am doing my work honesty. ilike to learn different things and want to build a functionalty of my knowladge
    //     </p>
    //     {/* <p className="a-desc">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
    //     </p>  */}
    //     <div className="a-award">

    //       {/* <div className="a-award-texts">
    //         <h4 className="a-award-title">International Design Awards 2021</h4>
    //         <p className="a-award-desc">
    //           Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
    //           and fugit.
    //         </p>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;