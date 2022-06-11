import React from 'react'
import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import NavbarOrDrawer from '../Navbar/NavbarOrDrawer';
import Projects from '../Projects/Projects';

export default function Container({t}) {
  return (
    <>
        <NavbarOrDrawer t={t}/>
        <Home t={t}/>
        <AboutMe t={t}/>
        <Projects t={t}/>
    </>
  )
}
