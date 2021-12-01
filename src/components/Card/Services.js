import React from 'react';
import './service.css'
import webdesign from '../../img/webdesign.png'
import development from '../../img/webdevelopment.png'
import code from '../../img/code.png'
import responsibe from '../../img/responsibedesign.png'
import bug from '../../img/bug.jpg'
import app from '../../img/webapp.jpg'
import { Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWpbeginner} from "@fortawesome/free-brands-svg-icons"

const Services = () => {
    return (
        <div id='service' className="container">
            <h1 className='text-success my-4 text-center'>MY SERVICES</h1>
            <div className="row ">
                <div className="col-md-6 col-lg-4 ">
                   <div className="">
                   <Card
                   
                   data-aos="flip-left"
    //  data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
                   style={{ width: '18rem' }} className='mx-auto mb-2 hoves border border-success  border-1 rounded-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className="mt-2 w-25 h-25 mx-auto">
                            <Card.Img variant="top" src={webdesign} className='' />

                        </div>
                        <Card.Body>
                            <Card.Title className='text-success fw-bold'>CREATIVE DESIGN</Card.Title>
                            <Card.Text className='text-capitalize'>
                                In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card 
                    data-aos="fade-up"
                    // data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="2000"
                    
                    style={{ width: '18rem' }} className='mx-auto h-100 border border-success  border-1 rounded-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className="mt-2 w-25 h-25 mx-auto mb-2">
                            <Card.Img variant="top" src={development} className='' />

                        </div>
                        <Card.Body >
                            <Card.Title className='text-success fw-bold'>WEB DEVELOPMENT</Card.Title>
                            <Card.Text className='text-capitalize'>
                                You can relay on our amazing features list and also our customer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card 
                    data-aos="zoom-in-up"
                    // data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="2000"
                    style={{ width: '18rem' }} className='mx-auto mb-2 border border-success  border-1 rounded-3 shadow p-3 mb-5 bg-body rounded' >
                        <div className="mt-2 w-25 h-25 mx-auto">
                            <Card.Img variant="top" src={code} className='' />

                        </div>
                        <Card.Body>
                            <Card.Title className='text-success fw-bold'>CAPTURE CODE</Card.Title>
                            <Card.Text className='text-capitalize'>
                                The Code Capture tool allows you easily create screenshots of you LabVIEW code for use in documentation, web-sites, wikis, emails.for creating well a GUI for easy capturing and use of code
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card
                    data-aos="zoom-in-right"
                    // data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    style={{ width: '18rem' }} className='mx-auto mb-2 border border-success  border-1 rounded-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className="mt-2 w-25 h-25 mx-auto">
                            <Card.Img variant="top" src={responsibe} className='' />

                        </div>
                        <Card.Body>
                            <Card.Title className='text-success fw-bold'>
                                RESPONSIVE DESIGN</Card.Title>
                            <Card.Text className='text-capitalize'>
                                Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card 
                     data-aos="zoom-in-left"
                    //  data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="2000"
                    style={{ width: '18rem' }} className='mx-auto mt-2 border border-success  border-1 rounded-3 shadow p-3 mb-5 bg-body rounded'>
                        <div className="mt-2 w-25 h-25 mx-auto">
                            <Card.Img variant="top" src={bug} className='' />

                        </div>
                        <Card.Body>
                            <Card.Title className='text-success fw-bold'>
                                BUG FIXING</Card.Title>
                            <Card.Text className='text-capitalize'>
                                A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card 
                    data-aos="zoom-out-right"
                    // data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="3000"
                    style={{ width: '18rem' }} className='mx-auto mt-2 border border-success  border-1 rounded-3 shadow p-3 bg-body rounded h-100'>
                        <div className="mt-2 w-50 h-50 mx-auto">
                            <Card.Img variant="top" src={app} className='' />

                        </div>
                        <Card.Body>
                            <Card.Title className='text-success fw-bold'>
                                WEB APP DEVELOPMENT</Card.Title>
                            <Card.Text className='text-capitalize'>
                                Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. Client refers to a computer application such as a web browser.It's Amazing
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;
