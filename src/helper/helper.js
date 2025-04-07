
export const getStyles = (elem, customStyle = {}) => ({
    left: elem.left,
    bottom: elem.bottom,
    width: elem.width,
    height: elem.height,
    background: `url(${elem.img})`,
    zIndex: elem.zIndex,
    position: 'absolute',
    ...customStyle,
})
export const getStylesText = (elem, customStyle = {}) => ({
    left: elem.left,
    bottom: elem.bottom,
    zIndex: elem.zIndex,
    position: 'absolute',
    ...customStyle,
})
export const getStylesBg = (elem, customStyle = {}) => ({
    left: elem.left,
    width: elem.width,
    height: elem.height,
    bottom: elem.bottom,
    zIndex: elem.zIndex,
    background : elem.background,
    position: 'absolute',
    ...customStyle,
})
export const getStylesCustomeElements = (elem, customStyle = {}) => ({
    left: elem.left,
    bottom: elem.bottom,
    zIndex: elem.zIndex,
    position: 'absolute',
    ...customStyle,
})
