import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import styles from './Projects.module.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import BotoneraCardCarousel from './BotoneraCardCarousel';


export default function Carrousel({ setLinkIframe, t }) {

    const [mobile, setMobile] = useState(3);

    const cellphone = useMediaQuery({
        query: '(min-width: 1000px)'
    })


    useEffect(() => {
        if (!cellphone) {
            setMobile(1);
        } else {
            setMobile(3);
        }
    }, [cellphone])

    /* Links PAGINAS */
    const links = [
        {
            auraflow: 'https://auraflow.netlify.app',
            sapphire: 'https://sapphirebar.netlify.app',
            mimi: 'https://www.mimipasteleria.com.ar',
            pilates: 'https://ar-pilates.netlify.app/index.html',
            colorGame: 'https://fraanguevara.github.io/ColorGame-JS/',
            portfolio: 'https://portfolio-fg.netlify.app/',
            gitHub: 'https://github.com/FraanGuevara'
        }
    ];

    /* Links REPOSITORIOS */
    const repositorios = [
        {
            auraflow: 'https://github.com/FraanGuevara/AppReact',
            sapphire: 'https://github.com/FraanGuevara/ProyectoJS',
            mimi: 'https://github.com/FraanGuevara/ProyectoPasteleria',
            pilates: 'https://ar-pilates.netlify.app/index.html',
            rosarioJobs: 'https://github.com/FraanGuevara/app-buscador-empleos',
            colorGame: 'https://github.com/FraanGuevara/ColorGame-JS',
            portfolio: 'https://github.com/FraanGuevara/Portfolio',
            gitHub: 'https://github.com/FraanGuevara?tab=repositories'
        }
    ];



    return (
        <>
            <Swiper
                /* minHeight={500} */
                slidesPerView={mobile}
                spaceBetween={30}
                freeMode={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselAuraflow}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].auraflow}
                                repositorio={repositorios[0].auraflow}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.auraflowTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.auraflowText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselSapphire}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].sapphire}
                                repositorio={repositorios[0].sapphire}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.sapphireTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.sapphireText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselMimi}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].mimi}
                                repositorio={repositorios[0].mimi}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.mimiTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.mimiText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPilates}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].pilates}
                                repositorio={repositorios[0].pilates}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.pilatesTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.pilatesText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselRosario}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].rosarioJobs}
                                repositorio={repositorios[0].rosarioJobs}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.rosarioJobsTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.rosarioJobsText")}
                                </p>
                                <p className={styles.textCardCarousel}>
                                {t("projects.rosarioJobsText2")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselColor}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].colorGame}
                                repositorio={repositorios[0].colorGame}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.colorGameTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.colorGameText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPortfolio}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].portfolio}
                                repositorio={repositorios[0].portfolio}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.portfolioTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.portfolioText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselGithub}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].gitHub}
                                repositorio={repositorios[0].gitHub}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>{t("projects.githubTitle")}</p>
                            <p className={styles.textCardCarousel}>
                            {t("projects.githubText")}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
