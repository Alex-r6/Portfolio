import React from 'react'
import { linkIMG } from '../../helper/helper'
import { shema } from '../../shema'

export const See_ground = () => {
  return (
    <>
      {shema.see_ground.map((elem, i) => <div key={i} style={{
        position: 'absolute',
        left: elem.left,
        bottom: elem.bottom,
        width: elem.width,
        height: elem.height,
        backgroundImage: `url(${linkIMG + elem.img})`,
        backgroundRepeat: 'repeat-x',
        zIndex: elem.zIndex
      }}></div>)}
      {shema.skills.map((elem, i) => <div key={i} style={{
        position: 'absolute',
        width: elem.width,
        height: elem.height,
        bottom: elem.bottom,
        left: elem.left,
        backgroundImage: `url(${linkIMG + elem.img})`
      }}></div>)}

      {shema.algae_g.map((elem, i) => <div key={i} style={{
        position: 'absolute',
        width: elem.width,
        height: elem.height,
        bottom: elem.bottom,
        left: elem.left,
        backgroundImage: `url(${linkIMG + elem.img})`,
        zIndex: elem.zIndex,
      }}>
        {elem.children && <div className={elem.children.className}>{elem.children.text}</div>}
      </div>)}

    </>
  )
}
