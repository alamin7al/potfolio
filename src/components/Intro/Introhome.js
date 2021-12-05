import React from 'react';
import About from '../About/About';
// import Detailspage from '../Card/Detailspage';
import Product from '../Card/Product';
import Services from '../Card/Services';
import Contacts from '../Contact/Contacts';
import Skills from '../Skills/Skills';
import Intro from './Intro';
import Navigato from './Navigato';

const Introhome = () => {
    return (
        <div>
            <Navigato></Navigato>
            <Intro/>
            <About/>
            <Product/>
            <Skills/>

           <Services/>
            <Contacts/>
            {/* <Detailspage/> */}
        </div>
    );
};

export default Introhome;