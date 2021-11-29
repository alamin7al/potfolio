import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Introhome from './components/Intro/Introhome';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introhome />} />
          <Route path="/introhome" element={<Introhome />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;