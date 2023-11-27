import React from 'react'
import About from './component/About'
import Contacts from './component/Contacts'
import Exprience from './component/Exprience'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Portfolio from './component/Portfolio'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/*" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
      <About />
      <Portfolio />
      <Exprience />
      <Contacts />
    </div>
  );
}

export default App
