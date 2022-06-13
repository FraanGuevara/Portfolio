import React from 'react'
import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import NavbarOrDrawer from '../Navbar/NavbarOrDrawer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';



export default function Container({ t }) {

  return (
    <>

      <NavbarOrDrawer t={t} />
      <Home t={t} />
      <AboutMe t={t} />
      <Projects t={t} />
      <Skills t={t}/>
      
    </>
  )
}
