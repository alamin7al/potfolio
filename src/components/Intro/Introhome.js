import React from 'react';
import About from '../About/About';
import Product from '../Card/Product';
import Services from '../Card/Services';
import Contacts from '../Contact/Contacts';
import Skills from '../Skills/Skills';
import Intro from './Intro';

const Introhome = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <Skills/>
            <Product/>
           <Services/>
            <Contacts/>
            
        </div>
    );
};

export default Introhome;