import React from 'react';
import About from '../About/About';
import Product from '../Card/Product';
import Contacts from '../Contact/Contacts';
import Skills from '../Skills/Skills';
import Intro from './Intro';
import Navigato from './Navigato';

const Introhome = () => {
    return (
        <div>
            <Navigato/>
            <Intro/>
            <About/>
            <Skills/>
            <Product/>
            <Contacts/>
        </div>
    );
};

export default Introhome;