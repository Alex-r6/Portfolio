import React from 'react'
import { linkIMG } from '../../helper/helper'
import { shema } from '../../shema'

export const Tree = () => {
  return (
    <>
    {shema.tree.map((elem,i)=><div key={i} style={{position:'absolute', 
                                                  width: elem.width,
                                                  height: elem.height,
                                                  bottom: elem.bottom,
                                                  left: elem.left,
                                                  backgroundImage: `url(${linkIMG + elem.img})`}}></div>)}

    </>
  )
}
