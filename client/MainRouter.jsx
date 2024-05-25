/* MainRouter.jsx Aziz Syed 301322427 May 18th 2024*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import About from './src/about'
import Projects from './src/projects'
import Services from './src/services'
import Contact from './src/contact'
import Layout from './Components/Layout'

const MainRouter = () => {
  return (<div id="main">
          <Layout/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
  </div>)
}
export default MainRouter