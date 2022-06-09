import React from 'react'
import Home from '../Home/Home';
import NavbarOrDrawer from '../Navbar/NavbarOrDrawer';

export default function Container({t}) {
  return (
    <>
        <NavbarOrDrawer t={t}/>
        <Home t={t}/>
    </>
  )
}
