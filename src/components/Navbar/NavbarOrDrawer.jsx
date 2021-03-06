import React from 'react'
import Navbar from './Navbar';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { useMediaQuery } from 'react-responsive';

function HideOnScroll(props) {
    
}

export default function NavbarOrDrawer({t}) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    return (
        <>
            {isDesktopOrLaptop ? 
            <Navbar 
            HideOnScroll={<HideOnScroll/>} 
            t={t}
            /> : 
            <PersistentDrawerLeft 
            HideOnScroll={<HideOnScroll/>}
            t={t}
            />}
        </>
    )
}
