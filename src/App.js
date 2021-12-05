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
import Skills from './components/Skills/Skills';
const App = () => {
  return (
    
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Introhome />} />
          <Route path="/introhome" element={<Introhome />} />
          <Route path="#skillss" element={<Skills />} />
          {/* <Route path="/details/:id" element={<Detailspage />} /> */}
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;