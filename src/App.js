

import './App.css';
import Heading from './components/Heading';
import Body from "./components/Body";
import React from 'react';

import Contact from "./components/Contact.js"
// import Error from "./components/Error.js";
import Services from "./components/Services.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Restaurantmenu from './components/Restaurantmenu.js';
import About from './components/About.js';
import Cardfile from './components/Cardfile.js';



function App() {
  return (
    <>

      <Router>
        <div>
          <Heading />

          <Routes>

            <Route path='/' element={<Body />} />
            <Route path="/About" element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Restaurantmenu' element={<Restaurantmenu />} />
            <Route path='/Cardfile' element={<Cardfile />} />

            {/* <Error path="/Error" element={<Error />} /> */}

          </Routes>
        </div>
      </Router>


    </>



  );
}


export default App;
