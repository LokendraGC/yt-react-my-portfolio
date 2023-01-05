import React from 'react'
import About from './component/About'
import Contacts from './component/Contacts'
import Exprience from './component/Exprience'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Portfolio from './component/Portfolio'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Exprience/>
      <Contacts/>
    </div>
  )
}

export default App
