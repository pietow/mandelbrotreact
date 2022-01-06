/** @format */

function convertPxToComplex(
    x,
    y,
    xMin,
    xMax,
    yMin,
    yMax,
    width,
    height,
    perPixel,
) {
    const middleX = (width * perPixel - (xMax - xMin)) / 2 // center Mandelbrot in canvas ---> shift by middelX
    const middleY = (height * perPixel - (yMax - yMin)) / 2 // center Mandelbrot in canvas ---> shift by middelY on y axis
    const Zi = yMax - perPixel * y + middleY
    const Zr = xMin + perPixel * x - middleX
    return [Zr, Zi]
    /* console.log('x:', x, 'Re:', Zr) */
    /* console.log('y:', y, 'Im:', Zi) */
}

export default convertPxToComplex
