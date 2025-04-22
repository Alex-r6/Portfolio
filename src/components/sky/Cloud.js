import { linkIMG } from "../../helper/helper"
import { shema } from "../../shema"


export const Sky = () => {
  return (
    <>
      {shema.sky.map((elem, i) => <div key={i} style={{
        position: 'absolute',
        zIndex: 14,
        width: elem.width,
        height: elem.height,
        top: elem.top,
        left: elem.left,
        backgroundImage: `url(${linkIMG + elem.img})`
      }}></div>)}
    </>
  )
}
