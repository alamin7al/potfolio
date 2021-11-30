import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import './products.css'
import './products.css'
import imgone from '../../img/screencapture-doctors-portal-a4989-web-app-home-2021-11-28-23_57_52.png'
import imgonee from '../../img/screencapture-lucid-mccarthy-1331fe-netlify-app-services-2021-11-28-23_55_05.png'
import imgoneee from '../../img/screencapture-pedantic-euclid-175e8c-netlify-app-home-2021-11-28-23_53_47.png'
import Category from './Category';
import Detailspage from './Detailspage';
import Services from './Services';
const services = [

    {
        id: 1,
        name: "cycale",
        gits: "https://github.com/alamin7al/assignment-12",
        server: 'https://github.com/alamin7al/assignment-12-server',
        web: "https://doctors-portal-a4989.web.app/explore",
        img: imgone,
      

    },
    {
        id: 2,
        name: "health",
        web: "https://lucid-mccarthy-1331fe.netlify.app/services",
        img: imgonee,
        gits: 'https://github.com/alamin7al/heatthCare'

    },
    {
        id: 3,
        name: "travel",
        server: "https://github.com/alamin7al/assignment11-server",
        gits: 'https://github.com/alamin7al/assignment-11-reactjs',
        web: "https://pedantic-euclid-175e8c.netlify.app/home",
        img: imgoneee,
       
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

        <div className='pp '>
            <div className=" container p h-100  text-center my-5 ">
                <div className="row ">
                    <Category filter={filter} />
                    <Detailspage service={website} />
                    {
                        website.map(service =>
                            <div className="col-lg-6">

                          
                            <div class="feature-card ">
                                <div class="feature-card-tilte col-lg-4">
                                    <h3>

                                    </h3>
                                    <div

                                        style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 350, width: '100%', backgroundImage: `url(${service.img})` }}></div>
                                    <p className=''>{service.name}</p>

                                    <div className='mb-2'>

                                        <button type="button" class="btn btn-dark me-2 btn-sm">Server Repo</button>
                                        <button type="button" class="btn btn-dark me-2 btn-sm">Client Repo</button>
                                        <button type="button" class="btn btn-dark me-2 btn-sm">Live Site</button>

                                    </div>
                                </div>

                                <div class="feature-card-deatails">
                                    <i class="fa fa-bank"></i>
                                    {service.name}
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                    <div className=''>

                                    <a target='blank' className='btn btn-dark btn-sm me-2 text-white' href={service?.gits}> Client Site</a>
                                    <a target='blank' className='btn btn-dark btn-sm me-2 text-white' href={service?.server}> Server Site</a>
                                    <a target='blank' className='btn btn-dark btn-sm me-2 text-white' href={service?.web}> Live Site</a>

                                    </div>
                                    {/* <Link disabled="disabled" to={`/details/${service?.id}`}> <button disabled="disabled" className='btn btn-primary'>Details</button>  </Link> */}

                                </div>
                            </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Product;
