import React from 'react'
import video from '../../video/videoHome.mp4'
import ButtonHome from './ButtonHome';
import styles from './Home.module.css';

export default function Home({t}) {

    return (
        <>
            <section className={styles.containerBoton} >
                <video muted autoPlay loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className={styles.capa}></div>
                <ButtonHome />
                <p style={{color:'white', display:'flex', flexDirection:'column', height:'100%', alignItems:'center', justifyContent:'end', fontSize:'15px'}}>{t("inicio.copy")}</p>
            </section> 
        </>
    )
}
