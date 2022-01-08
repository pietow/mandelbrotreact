/** @format */
import getPerPixel from './getPerPixel'
import convertPxToComplex from './converter'

function mandelbrot(xMin, xMax, yMin, yMax, width, height, iterMax) {
    const iterations = new Uint32Array(width * height)
    let index = 0
    let max = 0
    let min = iterMax
    const perPixel = getPerPixel(xMin, xMax, yMin, yMax, width, height)
    for (let x = 0; x < width; x += 1) {
        for (let y = 0; y < height; y += 1) {
            const [Cr, Ci] = convertPxToComplex(
                x,
                y,
                xMin,
                xMax,
                yMin,
                yMax,
                width,
                height,
                perPixel,
            )
            let Zi = 0
            let Zr = 0
            let Ti = 0
            let Tr = 0
            let n = 0

            for (; n < iterMax && Tr + Ti <= 4; n += 1) {
                Zi = 2 * Zi * Zr + Ci
                Zr = Tr - Ti + Cr
                Tr = Zr * Zr
                Ti = Zi * Zi
            }
            iterations[index++] = n
            /* console.log(n) */
            if (n > max) max = n
            if (n < min) min = n
        }
    }
    /* console.log(iterations) */
    return { iterations, min, max }
    /* if (Tr + Ti <= 4) return { r: 0, g: 0, b: 0, a: 255, n } */
    /* return { r: 0, g: 0, b: 0, a: 0, n } */
}

export default mandelbrot
