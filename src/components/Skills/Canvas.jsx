import React from "react";
import allIcons from 'simple-icons';
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
import styles from './Skills.module.css';

const Canvas = ({setTitleSkills}) => {

    const handleClick = (e) => {
        const { title } = e.target;
        setTitleSkills(title);
    }

    const tagCanvasOptions = {
        // activateAudio: string
        // activeCursor: string 
        // altImage: boolean
        // animTiming: 'Smooth' | 'Linear'
        // audioIcon: boolean
        // audioIconDark: boolean
        // audioIconSize: number
        // audioIconThickness: number
        // audioVolume: number
        // bgColor: null | string
        // bgOutlineThickness: number
        // bgRadius: number
        // centreFunc: any
        // centreImage: any
        clickToFront: 500,
        // decel: number
        depth: 1,
        dragControl: true,
        // dragThreshold: number
        // fadeIn: number
        // freezeActive: boolean
        // freezeDecel: boolean
        // frontSelect: boolean
        // hideTags: boolean
        // imageAlign: 'centre' | 'left' | 'right'
        // imageMode: null | 'image' | 'text' | 'both'
        // imagePadding: number
        // imagePosition: 'top' | 'bottom' | 'left' | 'right'
        // imageRadius: number | string
        imageScale: 2.5,
        // imageVAlign: 'top' | 'bottom' | 'middle'
        initial: [0.1, -0.1],
        // interval: number
        // lock: null | 'x' | 'y' | 'xy'
        // maxBrightness: number
        // maxSpeed: number
        // minBrightness: number
        // minSpeed: number
        // minTags: 0 - 200
        // noMouse: boolean
        // noSelect: boolean
        // noTagsMessage: string
        // offsetX: number
        // offsetY: number
        outlineColour: '#0000',
        // outlineDash: number
        // outlineDashSpace: number
        // outlineIncrease: number
        // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
        // outlineOffset: number
        // outlineRadius: number
        // outlineThickness: number
        // padding: number
        // pinchZoom: boolean
        // pulsateTime: number
        // pulstateTo: number
        // radiusX: number
        // radiusY: number
        // radiusZ: number
        // repeatTagsTags: 0 - 64
        reverse: false,
        // scrollPause: boolean
        // shadow: string
        // shadowBlur: number
        // shadowOffset: [number,number] | number[]
        // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
        // shuffleTags: boolean
        // splitWidth: number
        // stretchX: number
        // stretchY: number
        // textAlign: 'centre' | 'left' | 'right'
        // textColour: string
        // textFont: string
        // textHeight: number
        // textVAlign: 'top' | 'bottom' | 'middle'
        tooltip: 'native', // null | 'div'
        // tooltipClass: string
        tooltipDelay: 0,
        // txtOpt: boolean
        // txtScale: number
        // weight: boolean
        // weightFrom: any
        // weightGradient: any
        // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
        // weightSize: number
        // weightSizeMax: number | null
        // weightSizeMin: number | null
        wheelZoom: false,
        // zoom: number
        // zoomMax: number
        // zoomMin: number
        // zoomStep: number
    }
    const iconSlugs = [
        "javascript",
        "react",
        "redux",
        "typescript",
        "html5",
        "css3",
        "firebase",
        "git",
        "github",
        "visualstudiocode",
        "figma",
        "materialui",
        "postman",
        "java",
        "spring",
        "mysql"
    ];
    const iconTags = iconSlugs.map((slug) => ({
        id: slug,
        simpleIcon: allIcons.Get(slug)
    }));
    return (
        <>
            <div className={styles.containerCanva}>
                <div onClick={(e) => handleClick(e)} >
                    <IconCloud
                        canvasWidth={500}
                        canvasHeight={500}
                        key={v4()}
                        id={"icon"}
                        minContrastRatio={1}
                        iconSize={25}
                        backgroundHexColor={"#fff"}
                        fallbackHexColor={"#000"}
                        tags={iconTags}
                        tagCanvasOptions={tagCanvasOptions}
                    />
                </div>
            </div>
        </>

    );
};

export default React.memo(Canvas);