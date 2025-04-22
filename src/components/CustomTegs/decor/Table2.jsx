import React from 'react'
import { linkIMG } from '../../../helper/helper'

export const Table2 = () => {
    return (
        <div className="main_cont">
            <div className="top_cont">
                <div className="top_cont_words_empty">
                </div>
                <div className="top_cont_words">
                    <p>BEGINNER</p>
                </div>
                <div className="top_cont_words">
                    <p>ELEMENTARY</p>
                </div>
                <div className="top_cont_words">
                    <p>INTERMEDIATE</p>
                </div>
                <div className="top_cont_words">
                    <p>ADVANCED</p>
                </div>
            </div>
            <div className="lang_cont">
            <div className="crab_cont">
                    <div className="sea_ribbon_cont">
                        <img src={linkIMG + "decor/sea-ribbon-left.png"} />
                        <div className="lang_col">PYTHON</div>
                        <img src={linkIMG + "decor/sea-ribbon-right.png"} />
                    </div>
                    <div className="c_cont">
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="lang_cont">
            <div className="crab_cont">
                    <div className="sea_ribbon_cont">
                        <img src={linkIMG + "decor/sea-ribbon-left.png"} />
                        <div className="lang_col">REACT  </div>
                        <img src={linkIMG + "decor/sea-ribbon-right.png"} />
                    </div>
                    <div className="c_cont">
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="lang_cont">
            <div className="crab_cont">
                    <div className="sea_ribbon_cont">
                        <img src={linkIMG + "decor/sea-ribbon-left.png"} />
                        <div className="lang_col">FIGMA</div>
                        <img src={linkIMG + "decor/sea-ribbon-right.png"} />
                    </div>
                    <div className="c_cont">
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    <div className="crabi_cont">
                        <img className="crab_img" src={linkIMG + "animals/fish.png"} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
