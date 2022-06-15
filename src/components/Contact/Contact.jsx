import React from 'react'
import styles from './Contact.module.css';
import imgContact from '../../img/gifContact.gif';
import CardContacto from './CardContacto';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button } from '@mui/material';


export default function Contact({ t }) {
    return (
        <>
            <h2 id={styles.titleContact}><hr id={styles.hrTitleContact} />{t("skills.skills")} <hr id={styles.hrTitleContact} /></h2>
            <div className={styles.contact}>
                <div className={styles.contact__container}>
                    <div className={styles.contact__seccionLinks} >
                        <div className={styles.contact__seccionLinks_iconos}>
                            <CardContacto
                                Icono={ListAltIcon}
                                link={"Linkedin"}
                                t={t}
                            />
                            <CardContacto
                                Icono={WhatsAppIcon}
                                link={"whatsapp"}
                                t={t}
                            />
                            <CardContacto
                                Icono={CalendarMonthIcon}
                                link={"Calendby"}
                                t={t}
                            />
                            <CardContacto
                                Icono={LinkedInIcon}
                                link={"Linkedin"}
                                t={t}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

/* https://docs.google.com/forms/d/e/1FAIpQLSdWaBSVYlzgfres2lQlbC9Ut7UEyDJpjZ1EypTTFKoi428tsg/viewform?usp=sf_link */