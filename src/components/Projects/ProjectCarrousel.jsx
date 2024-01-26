import React from 'react'
import styles from './Projects.module.css';
import BotoneraCardCarousel from './botoneraCardCarousel';

export default function ProjectCarrousel({ link, repositorio, setLinkIframe, tTitle, tText }) {
    return (
        <>
                <div className={styles.capa}>
                    <div id={styles.iconosCardCarousel}>
                        <BotoneraCardCarousel
                            link={link}
                            repositorio={repositorio}
                            setLinkIframe={setLinkIframe}
                        />
                    </div>
                    <div>
                        <p className={styles.titleCardCarousel}>{tTitle}</p>
                        <p className={styles.textCardCarousel}>
                            {tText}
                        </p>
                    </div>
                </div>
        </>
    )
}
