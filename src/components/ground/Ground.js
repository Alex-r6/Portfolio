import { getStyles, linkIMG } from "../../helper/helper"
import { shema } from "../../shema"
//document.querySelector('#root').scrollTo({top : 500, behavior  :"smooth"})

export const Ground = () => {

  return (
    <>
      {shema.grass.map((elem, i) => <div key={i} style={getStyles(elem, { backgroundRepeat: 'repeat-x' })}></div>)}
      {shema.ground.map((elem, i) => <div key={i} style={{
        position: 'absolute',
        left: elem.left,
        bottom: elem.bottom,
        width: elem.width,
        height: elem.height,
        backgroundImage: `url(${linkIMG + elem.img})`,
        backgroundRepeat: elem.isRepeatY ? 'repeat' : 'repeat-x',
        zIndex: elem.zIndex
      }}></div>)}

      {shema.about.map((elem, i) => <div key={i} style={{
        position: 'absolute',
        width: elem.width,
        height: elem.height,
        bottom: elem.bottom,
        left: elem.left,
        backgroundImage: `url(${linkIMG + elem.img})`
      }}></div>)}
    </>
  )
}



