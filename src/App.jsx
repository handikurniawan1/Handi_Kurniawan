import React from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/nav'
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Project from './components/project'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
