import React from 'react';
import './Details.css'

import { useParams } from 'react-router';
import imgone from '../../img/screencapture-doctors-portal-a4989-web-app-home-2021-11-28-23_57_52.png'
import imgonee from '../../img/screencapture-lucid-mccarthy-1331fe-netlify-app-services-2021-11-28-23_55_05.png'
import imgoneee from '../../img/screencapture-pedantic-euclid-175e8c-netlify-app-home-2021-11-28-23_53_47.png'

import cd1 from '../../img/cd3.png'
import cd2 from '../../img/cd2.png'
import cd3 from '../../img/cycale3.png'
// import cd4 from '../../img/cd5.png'
// import cd5 from '../../img/cd1.png'

import travel1 from '../../img/travelone.png'
import travel11 from '../../img/travelss.png'
import travel111 from '../../img/travels.png'

import doctor from '../../img/doctorthree.png'
import doctor2 from '../../img/doctortwo.png'
import doctor3 from '../../img/doctortwo.png'
import { Card, Carousel } from 'react-bootstrap';
const Detailspage = () => {

    const { id } = useParams()
    const services = [

        {
            id: 1,
            name: "cycale",
            web: "https://doctors-portal-a4989.web.app/explore",
            cy1: cd1,
            cy2: cd2,
            cy3: cd3,


            img: imgone

        },
        {
            id: 2,
            name: "health",
            web: "https://lucid-mccarthy-1331fe.netlify.app/services",
            img: imgonee,
            cy1: doctor,
            cy2: doctor2,
            cy3: doctor3

        },
        {
            id: 3,
            name: "travel",
            web: "https://pedantic-euclid-175e8c.netlify.app/home",
            img: imgoneee,
            cy1: travel1,
            cy2: travel11,
            cy3: travel111
        },
    ]
    const filtt = services.filter(item => item.id == id)
    console.log(filtt);
    return (

<>
        <div className="container d-flex bg-primary " id='detailstt'>

            <div className="row bg-danger ">

                {
                    filtt.map(final =>

                        <Carousel className='bg-danger'>
                            <Carousel.Item className=''>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={final?.cy1} className='h' />

                                </Card>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={final?.cy2} className='h' />

                                </Card>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={final?.cy3} className='h' />

                                </Card>


                            </Carousel.Item>
                        </Carousel>
                    )
                }

            </div>


        </div>
        </>
    );
};

export default Detailspage;





