import React from 'react';
import './About.css'
import imgone from '../../img/Screenshot_2021-11-28-22-43-47-45-removebg-preview.png'


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={imgone}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> <small className='me'>About</small> Me</h1>
        <hr className='horizontal' />

        <div className='abouts'>
          <h1 className='fs-3 lh-base'>Name :Al Amin</h1>
          <h1 className='fs-3 lh-base'>Age : 21</h1>
          <h1 className='fs-3 lh-base'>qualification :Bachelor of Social Science (BSS) </h1>
          <h1 className='fs-3 lh-base'>POST : MERN Stack Developer </h1>
          <h1 className='fs-3 lh-base'>language : Bangla And English</h1>
        </div>
        <p className="a-sub fw-normal">
          I'ma Passionate web Designer And development and develpor. I believe in hard work. i am doing my work honesty. ilike to learn different things and want to build a functionalty of my knowladge
        </p>
        {/* <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>  */}
        <div className="a-award">

          {/* <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;