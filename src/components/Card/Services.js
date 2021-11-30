import React from 'react';
import './service.css'
import webdesign from '../../img/webdesign.png'
import development from '../../img/webdevelopment.png'
import code from '../../img/code.png'
import responsibe from '../../img/responsibedesign.png'
import bug from '../../img/bug.jpg'
import app from '../../img/webapp.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWpbeginner} from "@fortawesome/free-brands-svg-icons"

const Services = () => {
    return (
        <div class="timeline">
            <ul>
                <li>
                    <div class="right_content">
                        <div className="text-center">
                        <img src={webdesign} className='w-25 rounded-1 text-center mb-3' alt="" />

                        </div>

                        <p >In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design
                        </p>
                    </div>
                    <div class="left_content">
                        <h3>Web Design </h3>
                    </div>
                </li>
                <li>
                    <div class="right_content">

                        {/* <h2>Web Development</h2> */}
                        <div className="text-center">
                        <img src={development} className='w-25 rounded-1 text-center mb-3' alt="" />

                        </div>
                        <p>Weeb development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.
                        </p>
                    </div>
                    <div class="left_content">
                        <h3>Web Development </h3>
                    </div>
                </li>
                <li>
                    <div class="right_content">
                        <div className="text-center">
                        <img src={code} className='w-25 rounded-1 text-center mb-3' alt="" />

                        </div>
                        <p>The Code Capture tool allows you easily create screenshots of you LabVIEW code for use in documentation, web-sites, wikis, emails.for creating well a GUI for easy capturing and use of code
                        </p>
                    </div>
                    <div class="left_content">
                        <h3>Capture Code </h3>
                    </div>
                </li>
                <li>
                    <div class="right_content">
                    <div className="text-center">
                        <img src={responsibe} className='w-25 rounded-1 text-center mb-3' alt="" />

                        </div>
                        
                        <p>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.
                        </p>
                    </div>
                    <div class="left_content">
                        <h3>Responsibe Design </h3>
                    </div>
                </li>
                <li>
                    <div class="right_content">
                    <div className="text-center">
                        <img src={bug} className='w-25 rounded-1 text-center mb-3' alt="" />

                        </div>
                        <p>A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team.
                        </p>
                    </div>
                    <div class="left_content">
                        <h3>BUG FIXING</h3>
                    </div>
                </li>
                <li>
                    <div class="right_content">
                        <div className="text-center">
                        <img src={app} className='w-25 rounded-1 text-center mb-3' alt="" />

                        </div>
                        <p>Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. Client refers to a computer application such as a web browser.It's Amazing
                        </p>
                    </div>
                    <div class="left_content">
                        <h3 className='fs-5'>WEB APP DEVELOPMENT </h3>
                    </div>
                </li>

                <div className='clearr'></div>
            </ul>
        </div>
    );
};

export default Services;