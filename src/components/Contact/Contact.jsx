import React, {useEffect} from 'react'
import styles from './Contact.module.css';
import CardContacto from './CardContacto';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export default function Contact({ t }) {

    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const animationHr = useAnimation();
    const animationHr2 = useAnimation();
    const animationCard1 = useAnimation();
    const animationCard2 = useAnimation();
    const animationCard3 = useAnimation();
    const animationCard4 = useAnimation();
    
    useEffect(() => {
        if (inView) {
            animationHr.start({
                x: 0,
                scale: 1,
                transition: { ease: "easeOut", duration: 1.5 }
            })
            animationHr2.start({
                x: 0,
                scale: 1,
                transition: { ease: "easeOut", duration: 1.5 }
            })
            animationCard1.start({
                y: 0,
                scale1: 1,
                transition: { ease: "easeOut", duration: 1 }
            })
            animationCard2.start({
                y: 0,
                scale1: 1,
                transition: { ease: "easeOut", duration: 2 }
            })
            animationCard3.start({
                y: 0,
                scale1: 1,
                transition: { ease: "easeOut", duration: 3}
            })
            animationCard4.start({
                y: 0,
                scale1: 1,
                transition: { ease: "easeOut", duration: 4 }
            })
        }
        if (!inView) {
            animationHr.start({
                x: -500,
                scale: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
            animationHr2.start({
                x: 500,
                scale: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
            animationCard1.start({
                y: 800,
                scale1: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
            animationCard2.start({
                y: 800,
                scale1: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
            animationCard3.start({
                y: 800,
                scale1: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
            animationCard4.start({
                y: 800,
                scale1: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
        }
        console.log(inView)
    }, [inView]);

    return (
        <>
        <div
        id='hrefContact'
        >
            <h2 id={styles.titleContact}>
                <motion.hr animate={animationHr} id={styles.hrTitleContact} />
                {t("contact.contact")} 
                <motion.hr animate={animationHr2} id={styles.hrTitleContact} /></h2>
            <div ref={ref} className={styles.contact}>
                <div className={styles.contact__container}>
                    <div className={styles.contact__seccionLinks} >
                        <div className={styles.contact__seccionLinks_iconos}>
                            <CardContacto
                                Icono={ListAltIcon}
                                link={"https://docs.google.com/forms/d/e/1FAIpQLSdWaBSVYlzgfres2lQlbC9Ut7UEyDJpjZ1EypTTFKoi428tsg/viewform?usp=sf_link"}
                                t={t("contact.contactForm")}
                                animacion = {animationCard1}
                            />
                            <CardContacto
                                Icono={WhatsAppIcon}
                                link={"https://walink.co/7fd635"}
                                t={t("contact.contactWsp")}
                                animacion = {animationCard2}
                            />
                            <CardContacto
                                Icono={CalendarMonthIcon}
                                link={"https://calendly.com/francoguevara-dev/30min?month=2022-06"}
                                t={t("contact.contactCalendby")}
                                animacion = {animationCard3}
                            />
                            <CardContacto
                                Icono={LinkedInIcon}
                                link={"https://www.linkedin.com/in/fraanguevara/"}
                                t={t("contact.contactLinkedin")}
                                animacion = {animationCard4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

/* https://docs.google.com/forms/d/e/1FAIpQLSdWaBSVYlzgfres2lQlbC9Ut7UEyDJpjZ1EypTTFKoi428tsg/viewform?usp=sf_link */