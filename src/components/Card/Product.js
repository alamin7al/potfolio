import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './products.css'
import './products.css'
import imgone from '../../img/screencapture-doctors-portal-a4989-web-app-home-2021-11-28-23_57_52.png'
import imgonee from '../../img/screencapture-lucid-mccarthy-1331fe-netlify-app-services-2021-11-28-23_55_05.png'
import imgoneee from '../../img/screencapture-pedantic-euclid-175e8c-netlify-app-home-2021-11-28-23_53_47.png'
import Category from './Category';
const services = [
   
    {
        name: "cycale",
        web: "https://doctors-portal-a4989.web.app/explore",
        img: imgone

    },
    {
        name: "health",
        web: "https://lucid-mccarthy-1331fe.netlify.app/services",
        img: imgonee

    },
    {
        name: "travel",
        web: "https://pedantic-euclid-175e8c.netlify.app/home",
        img: imgoneee
    },
]
const Product = () => {
    const [website, setWebsite] = useState(services)
    const filter = (name) => {
        if(name==='all'){
            setWebsite(services)
            return
        }
        const newItems = services.filter((service) => service.name === name)
        setWebsite(newItems)
    }
    return (
        <div className='pp '>
            <div className=" container p h-100 bg-primary text-center my-5">
                <div className="row ">
                <Category filter={filter} />
                    {
                        website.map(service =>
                            <div className="col-md-6 col-lg-4 col-sm-12 text-center cen my-5">

                                <Card style={{ width: '18rem' }} className='cards  text-center'>

                                    <Card.Body className='text-center'>
                                        <Card.Title>  {service.name}</Card.Title>
                                         <Card.Img variant="top" src={service.img} className='h-50' />
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Product;

