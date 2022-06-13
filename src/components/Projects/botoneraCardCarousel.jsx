import React, {useEffect, useState} from 'react'
import DevicesIcon from '@mui/icons-material/Devices';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import styles from './Projects.module.css';

export default function BotoneraCardCarousel({link, repositorio, setLinkIframe}) {

  const [sizeIcon, setSizeIcon] = useState('40px');

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 900px)'
})


useEffect(() => {
  if (!isDesktopOrLaptop) {
    setSizeIcon('40px');
  } else {
    setSizeIcon('26px');
  }
}, [isDesktopOrLaptop])


  const functionIframe = () => {
    setLinkIframe(link);
  }


  return (
    <>
    <div style={{display:'flex', width:'50%', justifyContent:'space-around', alignItems:'flex-start'}}>
      {
        link ?
          <a href={link} target='_blank'
          rel="noopener">
            <OpenInNewIcon style={{fontSize:'26px', backgroundColor:'#111827', borderRadius:'10px', padding:'7px'}}/>
          </a> : null
      }
      {
        repositorio ?
          <a href={repositorio} target='_blank'
          rel="noopener">
            <GitHubIcon style={{fontSize:'26px', backgroundColor:'#111827', borderRadius:'10px', padding:'7px'}}/>
          </a> : null
      }
      {/* cellphone? */
        link ?
        <Button style={{width:'auto', margin:'0px', padding:'0px', background:'none', border:'none', justifyContent:'flex-start'}} onClick={()=>functionIframe()}>
          <DevicesIcon  id={styles.deviceIconBotonera} style={{fontSize:`${sizeIcon}`, backgroundColor:'#111827', borderRadius:'10px', padding:'7px'}}/>
        </Button>
        : null
        /* : null */
      }
        
    </div>
    </>
  )
    }
