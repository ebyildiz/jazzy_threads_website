
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Home'
import About from "./About"
import Contact from "./Contact"

import Layout from "./components/Layout"



function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
