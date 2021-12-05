import "./Intro.css";
import Me from "../../img/alamin2-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Particles from "react-tsparticles"
const Intro = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="i">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#eeeee4",
          //   },
          // },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 300,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "rgb(18, 206, 90)",
            },
            links: {
              color: "rgb(18, 206, 90)",
              distance: 200,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />



      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name text-success">Al Amin</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc ">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div className='d-flex'>
            <a href="https://web.facebook.com/profile.php?id=100033885724486" target='_blank'>
              <FontAwesomeIcon className='fs-1 ms-3 text-success' icon={faFacebook}>        </FontAwesomeIcon>
            </a>


            <a href="https://github.com/alamin7al" target='_blank'>

              <FontAwesomeIcon className='fs-1 ms-3  text-success' icon={faGithub}>    </FontAwesomeIcon>

            </a>



            <a href="https://www.linkedin.com/in/alaminal/" target='_blank'>
              <FontAwesomeIcon className='fs-1 ms-3  text-success' icon={faLinkedin}> </FontAwesomeIcon>          </a>
          </div>
        </div>

      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;


// import './Intro.css'
// import Me from "../../img/alamin2-removebg-preview.png";
// import Particles from "react-tsparticles"

// const Intro = () => {
//   const particlesInit = (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   };

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };
//   return (
//     <div
//       className="i">


//       <div data-aos="flip-left"
//         // data-aos-easing="ease-out-cubic"
//         data-aos-duration="3000" className="i-left">
//         <div className="i-left-wrapper">
//           <h2 className="i-intro ">Hello, My name is</h2>
//           <h1 className="i-name text-success ms-5">Al Amin</h1>
//           <div className="i-title">
//             <div className="i-title-wrapper">
//               {/* <div className="i-title-item"></div> */}

//               <div className="i-title-item">Web Developer</div>
//               <div className="i-title-item">UI/UX Designer</div>

//             </div>
//           </div>
//           <p className="i-desc fw-normal">
//             I design and develop services for customers of all sizes,
//             specializing in creating stylish, modern websites, web services and
//             online stores.
//           </p>
//           <div className="my-3 ms-5 ">

//             <a href="https://web.facebook.com/profile.php?id=100033885724486" target='_blank'>
//               <FontAwesomeIcon className='fs-1 ms-3 text-success' icon={faFacebook}>        </FontAwesomeIcon>
//             </a>


//             <a href="https://github.com/alamin7al" target='_blank'>

//               <FontAwesomeIcon className='fs-1 ms-3  text-success' icon={faGithub}>    </FontAwesomeIcon>

//             </a>



//             <a href="https://www.linkedin.com/in/alaminal/" target='_blank'>
//               <FontAwesomeIcon className='fs-1 ms-3  text-success' icon={faLinkedin}> </FontAwesomeIcon>          </a>

//           </div>
//           <a href="https://drive.google.com/uc?export=download&id=176xpYzFnByxHxRv90jBE8WQseWp54YJs" download="bottle"> <button className='btn btn-outline-success ms-5'>Download Resume</button> </a>
//         </div>



//       </div>
//       <div data-aos="flip-right"
//         // data-aos-easing="ease-out-cubic"
//         data-aos-duration="3000" className="i-right">
//         <div className="i-bg"></div>
//         <img src={Me} alt="" className="i-img" />
//       </div>
//       <div className='clear'></div>
//     </div>
//   );
// };

// export default Intro;