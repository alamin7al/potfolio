import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import './products.css'
import imgone from '../../img/screencapture-doctors-portal-a4989-web-app-home-2021-11-28-23_57_52.png'
import imgonee from '../../img/screencapture-lucid-mccarthy-1331fe-netlify-app-services-2021-11-28-23_55_05.png'
import imgoneee from '../../img/screencapture-pedantic-euclid-175e8c-netlify-app-home-2021-11-28-23_53_47.png'
import Category from './Category';
//https://alamin7al.github.io/app-lab/
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
        desc: 'hello',
        details: ' A Fully Functionally Full Stack Web App Based On Mern'



    },
    {
        id: 2,
        name: "health",
        web: "https://lucid-mccarthy-1331fe.netlify.app/services",
        img: imgonee,
        gits: 'https://github.com/alamin7al/heatthCare',
        desc: 'hello',
        tech: 'Html,Css,Bootstrap,React Js',
        details: "A FullyJavascript and React Js Site People Find Out For Best Doctor Should For need"


    },



    {
        id: 3,
        name: "travel",
        server: "https://github.com/alamin7al/assignment11-server",
        gits: 'https://github.com/alamin7al/assignment-11-reactjs',
        web: "https://pedantic-euclid-175e8c.netlify.app/home",
        img: imgoneee,
        desc: 'hello',
        tech: 'Reactjs,Nodejs,Node Express,Mongodb,React Bootstrap,Heroku',
        details: 'A Fully Functionally Travel Booking Site Using Mern Stack'

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

        <>
            <div className=" container   text-center my-5 ">
                <div className="row s  ">
                    <h2 className='my-2 text-success fs-1 text-uppercase'>My Projects</h2>
                    <hr className='project-hr text-success' />
                    <Category filter={filter} />
                    {/* <Detailspage service={website} /> */}
                    {
                        website.map(service =>
                            <div className="col-md-6  col-lg-4   ">


                                <div 
                                 data-aos="zoom-in-up"
                                 // data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="2000"
                                class="feature-card border border-success  border-1 rounded-3">
                                    <div class="feature-card-tilte ">
                                        {/* <h3>

                                        </h3> */}
                                        <div

                                            style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 350, backgroundImage: `url(${service.img})` }}></div>
                                        <p className=''>{service.name}</p>

                                        <div className='mb-1'>

                                            <button type="button" class="btn btn-dark  btn-sm">Server Repo</button>
                                            <button type="button" class="btn btn-dark  btn-sm">Client Repo</button>
                                            <button type="button" class="btn btn-dark  btn-sm">Live Site</button>

                                        </div>
                                    </div>

                                    <div class="feature-card-deatails">
                                        <i class="fa fa-bank"></i>
                                        {service.name}
                                        <p>
                                            {service.details}
                                        </p>
                                        <p>
                                        </p>
                                        <div className=''>

                                            <a target='blank' className='btn btn-dark btn-bg  text-white' href={service?.gits}> Client Site</a>
                                            <a target='blank' className='btn btn-dark btn-bg mx-2 text-white' href={service?.server}> Server Site</a>
                                            <a target='blank' className='btn btn-dark btn-bg  text-white' href={service?.web}> Live Site</a>

                                        </div>



                                        {/* <Link  to={`/details/${service?.id}`}> <button className='btn btn-primary'>Details</button>  </Link> */}



                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
            <div className='cl'> </div>

            </div>
        </>
    );
};

export default Product;
