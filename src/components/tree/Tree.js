import React from 'react'
import { shema } from '../../shema'

export const Tree = () => {
  return (
    <>
    {shema.tree.map((elem,i)=><div key={i} style={{position:'absolute', 
                                                  width: elem.width,
                                                  height: elem.height,
                                                  bottom: elem.bottom,
                                                  left: elem.left,
                                                  backgroundImage: `url(${elem.img})`}}></div>)}

    </>
  )
}
