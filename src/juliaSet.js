/** @format */
import getPerPixel from './getPerPixel'
import convertPxToComplex from './converter'

function juliaSet(xMin, xMax, yMin, yMax, width, height, iterMax) {
    const iterations = new Uint32Array(width * height)
    const radiusZn = new Float32Array(iterations)
    let index = 0
    let max = 0
    let min = iterMax
    let maxRad = 0
    let minRad = 10
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
            let Zi = Ci
            let Zr = Cr
            let Ti = 0
            let Tr = 0
            let n = 0

            for (; n < iterMax && Tr + Ti <= 4; n += 1) {
                Zi = 2 * Zi * Zr + 0.745
                Zr = Tr - Ti - 1.23
                Tr = Zr * Zr
                Ti = Zi * Zi
            }
            iterations[index++] = n
            const radius = Math.sqrt(Tr + Ti)
            radiusZn[index] = radius
            if (n > max) max = n
            if (n < min) min = n
            if (radius > max) maxRad = n
            if (radius < min) minRad = n
        }
    }
    console.log(iterations)
    return { iterations, radiusZn, min, max, minRad, maxRad }
}

export default juliaSet
