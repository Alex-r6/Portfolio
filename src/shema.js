import { Robot } from "./components/CustomTegs/decor/Robot";
import { Octopus } from "./components/CustomTegs/decor/Octopus";
import { Table } from "./components/CustomTegs/decor/Table";
import { Table2 } from "./components/CustomTegs/decor/Table2";
import { Table3 } from "./components/CustomTegs/decor/Table3";
import { linkIMG } from "./helper/helper";

export const shema = {
    heroMove: [
        {
            type: 'RUN',
            widthStart: 0,
            widthEnd: 5130,
            top: 0
        },
        {
            type: 'SWIMMING',
            widthStart: 5131,
            widthEnd: 8060,
            top: 500
        },
        {
            type: 'RUN',
            widthStart: 8061,
            widthEnd: 12000,
            top: 0
        },
    ],
    customTegs: [
        {
            bottom: '-43vh',
            left: '5300px',
            height: '65vh',
            width: '3500px',
            background: "#0072BC",
            zIndex: 0
        }
    ],
    elements: [
        {
            body: <div className="name_cont">
                <div className="name_text">Orlov Oleksii </div>
            </div>,
            style: {
                bottom: '65vh',
                left: '170px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Interactive resume of </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '80vh',
                left: '200px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Languages: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '80vh',
                left: '2100px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Live and work in Kyiv: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '80vh',
                left: '2765px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Sports fan: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '80vh',
                left: '4310px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Programming Language: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '8vh',
                left: '6710px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Others: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '8vh',
                left: '7660px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Work experience 1: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '87vh',
                left: '10150px',
                zIndex: 9
            }
        },
        {
            body: <div className="ribbon_cont">
                <img src={linkIMG + "social/ribbon-left.png"} />
                <div className="ribbon_text">Work experience 2: </div>
                <img src={linkIMG + "social/ribbon-right.png"} />
            </div>,
            style: {
                bottom: '87vh',
                left: '11250px',
                zIndex: 9
            }
        },
        {
            body: <div className="work_cont">
                <img src={linkIMG + "decor/chain-block.png"} />
                <div className="work_text">
                    <p className="work_text_y">Nov 2021 - Present</p>
                    <p className="work_text_p">Operations Support Specialist</p>
                    <p className="work_text_w">Rating sound files, Creating interviews for working with clients, Checking previously created interviews using communication programs</p>
                </div>
            </div>,
            style: {
                bottom: '50vh',
                left: '9950px',
                zIndex: 0
            }
        },
        {
            body: <div className="work_cont">
                <img src={linkIMG + "decor/chain-block.png"} />
                <div className="work_text">
                    <p className="work_text_y">Jun 2009 - Nov 2021</p>
                    <p className="work_text_p">“SEB SERVICE” LLC</p>
                    <p className="work_text_w">Cargo transportation orders processing, Documentation for customs, Conflict situations connected to goods transportation settling</p>
                </div>
            </div>,
            style: {
                bottom: '50vh',
                left: '11050px',
                zIndex: 0
            }
        },
        {
            body: <div className="work_cont">
                <img src={linkIMG + "decor/plant.png"} />
                <div className="red_pipe"></div>
            </div>,
            style: {
                bottom: 'calc(20vh + 10px)',
                left: '2170px',
            }
        },
        {
            body: <div className="work_cont">
                <img src={linkIMG + "decor/plant.png"} />
                <div className="red_pipe"></div>
            </div>,
            style: {
                bottom: 'calc(20vh - 60px)',
                left: '2350px',
            }
        },
        {
            body: <Robot />,
            style: {
                bottom: '40vh',
                left: '11430px',
                zIndex: 0
            }
        },
        {
            body: <Octopus />,
            style: {
                bottom: '30vh',
                left: '10280px',
                // zIndex: 0
            }
        },
        {
            body: <Table />,
            style: {
                bottom: '-35vh',
                left: '6550px',
            }
        },
        {
            body: <Table2 />,
            style: {
                bottom: '-35vh',
                left: '7350px',
            }
        },
        {
            body: <Table3 />,
            style: {
                bottom: 'calc(24vh + 45px)',
                left: '1920px',
            }
        }
    ],


    ground: [
        {
            bottom: '-74vh',
            left: 0,
            isRepeatY : true,
            height: '93vh', 
            width: '5300px',
            img: "bg/ground.png",
        },
        {
            bottom: '-74vh',
            left: '5300px',
            height: '25vh',
            width: '6700px',
            img: "bg/ground.png",
        },
        {
            bottom: '-73vh',
            left: '8300px',
            isRepeatY : true,
            height: '78vh',
            width: '3700px',
            img: "bg/panel.png",
            zIndex: 1
        },
        {
            bottom: '5vh',
            left: '8300px',
            isRepeatY : true,
            height: '15vh',
            width: '3700px',
            img: "bg/panel.png",
            zIndex: 1
        },
    ],

    grass: [
        {
            bottom: '18vh',
            left: 0,
            height: '50px',
            width: '5300px',
            img: `${linkIMG}bg/grass.png`,
            zIndex: 2
        },
        {
            bottom: '19vh',
            left: '8300px',
            height: '50px',
            width: '3700px',
            img: `${linkIMG}bg/floor.png`,
            zIndex: 2
        },
    ],

    sky: [
        {
            width: '180px',
            height: '120px',
            top: '4vh',
            left: '750px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '65px',
            left: '1200px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '3vh',
            left: '1550px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '3vh',
            left: '3400px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '3vh',
            left: '3900px',
            img: "bg/cloud.png"
        },

        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '4900px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '5500px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '6000px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '6700px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '7300px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '7800px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '8200px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '9000px',
            img: "bg/cloud.png"
        },
        {
            width: '180px',
            height: '120px',
            top: '2vh',
            left: '9500px',
            img: "bg/cloud.png"
        },


    ],
    map: {
        width: '12000px',

    },
    hero: {
        left: '',
        right: ''
    },

    tree: [

    ],

    mountain: [

    ],

    see_ground: [
        {
            height: '13vh',
            width: '3000px',
            bottom: '-56vh',
            left: '5300px',
            img: "decor/dock-floor.png"
        },
        {
            bottom: 'calc(22vh - 1px)',
            left: '5300px',
            height: '6px',
            width: '3000px',
            img: "decor/sea-wave.png",
            zIndex: 2
        }
    ],

    skills: [

    ],

    algae_g: [
        {
            width: '800px',
            height: '400px',
            bottom: '21vh',
            left: '3400px',
            img: "decor/mountain.png"

        },
        {
            width: '140px',
            height: '180px',
            bottom: '21vh',
            left: '1vw',
            img: "decor/tree-bright-b.png"
        },
        {
            width: '140px',
            height: '180px',
            bottom: '21vh',
            left: '1100px',
            img: "decor/tree-bright-b.png"
        },
        {
            width: '140px',
            height: '130px',
            bottom: 'calc(18vh + 16px)',
            left: '1700px',
            img: "decor/tree-bright-a.png"
        },
        {
            width: '140px',
            height: '100px',
            bottom: 'calc(18vh + 46px)',
            left: '3350px',
            img: "decor/tree-bright-a.png"
        },
        {
            width: '140px',
            height: '180px',
            bottom: '21.5vh',
            left: '3500px',
            img: "decor/tree-bright-b.png"
        },
        {
            width: '140px',
            height: '180px',
            bottom: '21vh',
            left: '3650px',
            img: "decor/tree-bright-b.png"
        },
        {
            width: '140px',
            height: '180px',
            bottom: '21vh',
            left: '3800px',
            img: "decor/tree-bright-b.png"
        },
        {
            width: '140px',
            height: '180px',
            bottom: '21vh',
            left: '4700px',
            img: "decor/tree-bright-b.png"
        },
        {
            width: '140px',
            height: '100px',
            bottom: 'calc(18vh + 46px)',
            left: '4850px',
            img: "decor/tree-bright-a.png"
        },
        {
            width: '80px',
            height: '270px',
            bottom: '-43vh',
            left: '5320px',
            img: "decor/algae-a.png",
            zIndex: 2,
        },
        {
            width: '160px',
            height: '250px',
            bottom: '-43vh',
            left: '6350px',
            img: "decor/algae-b.png",
            zIndex: 16,
        },
        {
            width: '160px',
            height: '250px',
            bottom: '-43vh',
            left: '7200px',
            img: "decor/algae-b.png",
            zIndex: 16,
        },
        {
            width: '200px',
            height: '140px',
            bottom: '-43vh',
            left: '6200px',
            img: "decor/coral-a.png"
        },
        {
            width: '200px',
            height: '140px',
            bottom: '-43vh',
            left: '5400px',
            img: "decor/coral-b.png",
            zIndex: 0
        },
        {
            width: '200px',
            height: '140px',
            bottom: '-43vh',
            left: '8100px',
            img: "decor/coral-b.png",
            zIndex: 0
        },
        {
            width: '80px',
            height: '270px',
            bottom: '-43vh',
            left: '8020px',
            img: "decor/algae-a.png",
            zIndex: 2,
        },
        {
            width: '320px',
            height: '220px',
            bottom: '20vh',
            left: '750px',
            img: "decor/gate.png",

            children: {
                text: 'LEVEL 1',
                className: "titleText"
            }
        },
        {
            width: '320px',
            height: '220px',
            bottom: '20vh',
            left: '4980px',
            img: "decor/gate.png",
            children: {
                text: 'LEVEL 2',
                className: "titleText"
            }
        },
        {
            width: '320px',
            height: '220px',
            bottom: '22vh',
            left: '8300px',
            img: "decor/gate.png",
            children: {
                text: 'LEVEL 3',
                className: "titleText"
            }
        },
        {
            width: '200px',
            height: '400px',
            bottom: 'calc(18vh + 50px)',
            left: '2550px',
            img: "bg/building-a.png",
        },
        {
            width: '200px',
            height: '400px',
            bottom: 'calc(18vh + 50px)',
            left: '3150px',
            img: "bg/building-c.png",
        },
        {
            width: '360px',
            height: '340px',
            bottom: 'calc(18vh + 50px)',
            left: '2770px',
            img: "decor/kiev_re.png",
        },
        {
            width: '310px',
            height: '230px',
            bottom: '25vh',
            left: '4400px',
            img: "decor/motogp.png",
        },
        {
            width: '610px',
            height: '235px',
            bottom: '57vh',
            left: '4100px',
            img: "decor/sbk.png",
        },
        {
            width: '360px',
            height: '300px',
            bottom: '35vh',
            left: '4000px',
            img: "decor/wrc.png",
        },
        {
            width: '110px',
            height: '1955px',
            bottom: '12vh',
            left: '9750px',
            img: "bg/crane.png",
            zIndex: 0
        },
        {
            width: '110px',
            height: '1955px',
            bottom: '12vh',
            left: '10800px',
            img: "bg/crane.png",
            zIndex: 0
        }
    ],

    about: [
        {
            width: '800px',
            height: '250px',
            bottom: '20vh',
            left: '1050px',
            img: "words/title-about.png",
            zIndex: 9,
        },
        {
            width: '1200px',
            height: '250px',
            bottom: '22vh',
            left: '8550px',
            img: "words/title-experience.png",
            zIndex: 9,
        },
        {
            width: '840px',
            height: '200px',
            bottom: '-43vh',
            left: '5400px',
            img: "words/title-skills.png"

        }
    ],


}