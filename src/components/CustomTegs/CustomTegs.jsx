import { getStyles, getStylesBg, getStylesCustomeElements } from "../../helper/helper"
import { shema } from "../../shema"

export const CustomTegs = () => {
  return (
    <>
      {shema.customTegs.map((elem, i) => <div key={i} style={getStylesBg(elem)}></div>)}
      {shema.elements.map((elem, i) => <div key={i} style={getStylesCustomeElements(elem.style)}>{elem.body}</div>)}
    </>
  )
}
