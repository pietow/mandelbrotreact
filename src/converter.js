/** @format */

function convertPxToComplex(x, y, xMin, xMax, yMin, yMax, width, height) {
    const Zi = yMax - ((yMax - yMin) * y) / (height) // pixel starts at upper left corner --> for yPixel = 0 we start at yMin
    const Zr = xMin + ((xMax - xMin) * x) / (width) // left corner  --> for xPixel = 0 we start at xMin
    return [Zr, Zi]
    /* console.log('x:', x, 'Re:', Zr) */
    /* console.log('y:', y, 'Im:', Zi) */
}

export default convertPxToComplex
