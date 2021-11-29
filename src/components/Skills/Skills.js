import React from 'react';
import './Skills.css'
import { Card } from 'react-bootstrap';
import html from '../../img/html.png'
import  css from '../../img/csss.png'
import  meterial from '../../img/meterial.png'
import javascript  from '../../img/javascript.jpg'
import  react from '../../img/react.png'
import node  from '../../img/node.png'
import  router from '../../img/router.png'
import firebase  from '../../img/firebase.png'
import express  from '../../img/express.png'
import github  from '../../img/github.png'
import hooks  from '../../img/hooks.png'
import mongo  from '../../img/mongodb.png'
import boot from '../../img/bott.png'
const icons = [
    {
        name: 'HTML5',
        img:html

    },
    {
        name: 'CSS3',
        img:css

    },
    
    {
        name: 'Metarial UI',
        img:meterial

    },
    {
        name: 'Bootstrap',
        img:boot

    },
    {
        name: 'Javascript ',
        img:javascript

    },
    {
        name: 'React JS',
        img:react

    },
    {
        name: 'React Router',
        img:router

    },
    {
        name: 'React Hook',
        img:hooks

    },
    {
        name: 'Node JS',
        img:node

    },
    {
        name: 'Mongodb ',
        img:mongo

    },
    {
        name: 'Express ',
        img:express

    },
    {
        name:'Firebase',
        img:firebase
    },
    {
        name:'Github',
        img:github
    }
]

const Skills = () => {
    return (
        <div className=' h-100 my-5 text-center'>
            <h4 className=' m-5'> MY Skills</h4>
            <div className="container ">
                <div className="row ">
                    {
                        icons.map(icon =>
                            <div className='col-lg-3 col-md-4 col-sm-6    mb-5 cent '>
                                <Card style={{ width: '18rem' }} className='cardss h-100 w-50 text-center'>
                                    <div className="text-center mt-2">
                                <Card.Img variant="top" src={icon.img} className='h-100 w-75 '  />

                                    </div>
                                    <Card.Body className='text-center p'>
                                        <Card.Title>  {icon.name}</Card.Title>

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

export default Skills;