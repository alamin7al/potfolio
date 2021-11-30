import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Introhome from './components/Intro/Introhome';
// import Detailspage from './components/Card/Detailspage';
import Navigato from './components/Intro/Navigato';
import Skills from './components/Skills/Skills';
import Detailspage from './components/Card/Detailspage';
const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Navigato/>

        <Routes>
          <Route path="/" element={<Introhome />} />
          {/* <Route path="/introhome" element={<Introhome />} /> */}
          <Route path="#skillss" element={<Skills />} />
          {/* <Route path="/details/:id" element={<Detailspage />} /> */}
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;