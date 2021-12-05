import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import './products.css'
import imgone from '../../img/screencapture-doctors-portal-a4989-web-app-home-2021-11-28-23_57_52.png'
import imgonee from '../../img/screencapture-lucid-mccarthy-1331fe-netlify-app-services-2021-11-28-23_55_05.png'
import imgoneee from '../../img/screencapture-pedantic-euclid-175e8c-netlify-app-home-2021-11-28-23_53_47.png'
import Category from './Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//https://alamin7al.github.io/app-lab/
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Detailspage from './Detailspage';
// import Services from './Services';
const services = [

    {
        id: 1,
        name: "cycale",
        gits: "https://github.com/alamin7al/assignment-12",
        server: 'https://github.com/alamin7al/assignment-12-server',
        web: "https://doctors-portal-a4989.web.app/explore",
        img: imgone,
        head: 'BEST Cycale ACCESSORIES SHOP',
        one: '  A responsive, fully-functional niche website',

        two: 'Allowing customers to create an account, browse products, buy products & write reviews.',
        three: ' Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.',
        tech: 'React Bootstrap,React Router,React Js, Heroku, Firebase ,NodeJs ,Express Js MongoDb'

    },
    {
        id: 2,
        name: "health",
        web: "https://lucid-mccarthy-1331fe.netlify.app/services",
        img: imgonee,
        gits: 'https://github.com/alamin7al/heatthCare',
        head: 'MEDICAL & HEALTH CARE SERVICES',
        one: ' A fully functional dynamic responsive website',
        two: " User can see his name and profile picture in the header after signin with Google.",
        three: 'Navigate different pages is possible through navbar without reloading.',
        tech: 'React Bootstrap,React Router,React Js, Heroku, Firebase ,NodeJs ,Express Js MongoDb'

    },



    {
        id: 3,
        name: "travel",
        server: "https://github.com/alamin7al/assignment11-server",
        gits: 'https://github.com/alamin7al/assignment-11-reactjs',
        web: "https://pedantic-euclid-175e8c.netlify.app/home",
        img: imgoneee,
        head: 'BEST TRAVEL AGENCY',
        one: 'Travel agency website with dynamic functions and responsive design.',
        two: 'Allows user to create an account, book packages, add custom packages, and delete them.',
        three: "Google firebase authentication has been added.",
        tech: 'React Bootstrap,React Router,React Js, Heroku, Firebase ,NodeJs ,Express Js MongoDb'

    },

]
const Product = () => {
    const [website, setWebsite] = useState(services)
    const filter = (name) => {
        if (name === 'all') {
            setWebsite(services)
            return
        }
        const newItems = services.filter((service) => service.name === name)
        setWebsite(newItems)
    }
    return (

        <div class="container my-5">
            <Category className='mt-5' filter={filter} />

            <div class="row mb-5">
                <h4 className=' my-5 text-success fs-1'>MY-PROJECTS</h4>
                
                {website.map(seb =>
                    <div class="container"><div class="row mb-5"><div class="col-md-4 projectImg"><img src={seb.img} alt="" class="img-fluid pb-5 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="500" /></div><div class="col-md-8 project-details aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                        <h3 class="project-card__title mt-md-0 mt-sm-5 text-success fs-3">❖ {seb.head}</h3>

                        <p>Nov 2021 - Nov 2021</p>

                        <ul class="my-item fw-light "><li>➣ {seb?.one}.</li><li>➣ {seb?.two}</li><li>➣ {seb?.three}</li></ul>

                        <p className='fs-5 fw-normal'><em className='fs-4 text-success'>Technology Use:</em> {seb.tech}</p>

                        <div class="project-link">
                            <a href={seb.web} target="_blank"> <button className='btn btn-outline-success'>Live Site</button> </a>

                            <a href={seb.gits} target="_blank">  <button className='btn btn-outline-success'>Client Side</button> </a>

                            <a href={seb.server} target="_blank">
                                <button className='btn btn-outline-success'>Server Side</button>
                            </a>


                            <a href="https://www.linkedin.com/in/alaminal/" target='_blank'>
                                <FontAwesomeIcon className='fs-1 ms-3 mt-4  text-success' icon={faLinkedin}> </FontAwesomeIcon>          </a>



                        </div>


                    </div></div></div>

                )}
            </div>
        </div>



    );
};

export default Product;

// <>
// <div className=" container  ss text-center my-5 ">
//     <div className="row s  ">
//         <h2 className='my-2 text-success fs-1 text-uppercase'>My Projects</h2>
//         <hr className='project-hr text-success' />
//         <Category filter={filter} />
//         {/* <Detailspage service={website} /> */}
//         {
//             website.map(service =>
//                 <div className="col-md-6  col-lg-4   ">


//                     <div
//                         data-aos="zoom-in-up"
//                         // data-aos-anchor-placement="bottom-bottom"
//                         data-aos-duration="2000"
//                         class="feature-card border border-success  border-1 rounded-3">
//                         <div class="feature-card-tilte ">
//                             {/* <h3>

//                             </h3> */}
//                             <div

//                                 style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 350, backgroundImage: `url(${service.img})` }}></div>
//                             <p className=''>{service.name}</p>

//                             <div className='mb-1'>

//                                 <button type="button" class="btn btn-dark  btn-sm">Server Repo</button>
//                                 <button type="button" class="btn btn-dark  btn-sm">Client Repo</button>
//                                 <button type="button" class="btn btn-dark  btn-sm">Live Site</button>

//                             </div>
//                         </div>

//                         <div class="feature-card-deatails">
//                             <i class="fa fa-bank"></i>
//                             {service.name}
//                             <p>
//                                 {service.details}
//                             </p>
//                             <p>
//                             </p>
//                             <div className=''>

//                                 <a target='blank' className='btn btn-dark btn-bg  text-white' href={service?.gits}> Client Site</a>
//                                 <a target='blank' className='btn btn-dark btn-bg mx-2 text-white' href={service?.server}> Server Site</a>
//                                 <a target='blank' className='btn btn-dark btn-bg  text-white' href={service?.web}> Live Site</a>

//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             )
//         }


//     </div>
//     <div className='cl'> </div>

// </div>
// </>
