import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import styles from './Projects.module.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import BotoneraCardCarousel from './BotoneraCardCarousel';
import ProjectCarrousel from './ProjectCarrousel';


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
            portfolio: 'https://www.francoguevara.com.ar',
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
                    <ProjectCarrousel
                        link={links[0].auraflow}
                        repositorio={repositorios[0].auraflow}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.auraflowTitle")}
                        tText={t("projects.auraflowText")}
                    />
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselSapphire}>
                    <ProjectCarrousel
                        link={links[0].sapphire}
                        repositorio={repositorios[0].sapphire}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.sapphireTitle")}
                        tText={t("projects.sapphireText")}
                    />
                </SwiperSlide>

                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselMimi}>
                    <ProjectCarrousel
                        link={links[0].mimi}
                        repositorio={repositorios[0].mimi}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.mimiTitle")}
                        tText={t("projects.mimiText")}
                    />
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPilates}>
                    <ProjectCarrousel
                        link={links[0].pilates}
                        repositorio={repositorios[0].pilates}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.pilatesTitle")}
                        tText={t("projects.pilatesText")}
                    />
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselRosario}>
                    <ProjectCarrousel
                        link={links[0].rosarioJobs}
                        repositorio={repositorios[0].rosarioJobs}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.rosarioJobsTitle")}
                        tText={t("projects.rosarioJobsText2")}
                    />
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselColor}>
                    <ProjectCarrousel
                        link={links[0].colorGame}
                        repositorio={repositorios[0].colorGame}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.colorGameTitle")}
                        tText={t("projects.colorGameText")}
                    />
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPortfolio}>
                    <ProjectCarrousel
                        link={links[0].portfolio}
                        repositorio={repositorios[0].portfolio}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.portfolioTitle")}
                        tText={t("projects.portfolioText")}
                    />
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselGithub}>
                    <ProjectCarrousel
                        link={links[0].gitHub}
                        repositorio={repositorios[0].gitHub}
                        setLinkIframe={setLinkIframe}
                        tTitle={t("projects.githubTitle")}
                        tText={t("projects.githubText")}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
