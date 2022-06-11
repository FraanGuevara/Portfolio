import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import styles from './Projects.module.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";

export default function Carrousel() {

    const [mobile, setMobile] = useState(3);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 400px)'
    })

    useEffect(() => {
        if (!isDesktopOrLaptop) {
            setMobile(1);
        } else {
            setMobile(3);
        }
    }, [isDesktopOrLaptop])



    return (
        <>
            <Swiper
                minHeight={500}
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
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselSapphire}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselMimi}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPilates}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselRosario}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselColor}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPortfolio}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselGithub}>
                <div className={styles.capa}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti dolore. Ab accusantium debitis eaque facere fugiat excepturi perspiciatis assumenda doloremque. Alias obcaecati adipisci, illum eum quos maxime recusandae tempora!
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
