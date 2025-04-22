import { linkIMG } from "../../../helper/helper"

export const Robot = () => {
  return (
    <div className="robot_cont">
        <img src={linkIMG + "decor/robot-body.png"}  />
        <img className="left_hand" src={linkIMG + "decor/robot-hand-a.png"} />
        <img className="right_hand" src={linkIMG + "decor/robot-hand-a.png"} />
    </div>
  )
}
