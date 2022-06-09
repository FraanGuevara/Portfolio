import React from 'react'
import video from '../../video/videoHome.mp4'
import ButtonInicio from './ButtonInicio';
import styles from './Inicio.module.css';

export default function Inicio({t}) {

    return (
        <>
            <section className={styles.containerBoton} >
                <video muted autoPlay loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className={styles.capa}></div>
                <ButtonInicio />
                <p style={{color:'white', display:'flex', flexDirection:'column', height:'100%', alignItems:'center', justifyContent:'end', fontSize:'15px'}}>{t("inicio.copy")}</p>
            </section> 
        </>
    )
}
