import { linkIMG } from "../../../helper/helper"


export const Octopus = () => {
    return (
      <div className="octopus_cont">
          <img className="oct_photo" src={linkIMG + "decor/squid-body.png"} alt="" />
          <img className="s_hand_1" src={linkIMG + "decor/squid-hand-open-a.png"} alt="" />
          <img className="s_hand_2" src={linkIMG + "decor/squid-hand-open-b.png"} alt="" />
          <img className="s_hand_3" src={linkIMG + "decor/squid-hand-open-c.png"} alt="" />
          <img className="s_hand_4" src={linkIMG + "decor/squid-hand-open-d.png"} alt="" />
      </div>
    )
  }