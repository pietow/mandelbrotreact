/** @format */
import getPerPixel from './getPerPixel'
import convertPxToComplex from './converter'

function juliaSet(xMin, xMax, yMin, yMax, width, height, iterMax) {
    const iterations = new Uint32Array(width * height)
    let index = 0
    let max = 0
    let min = iterMax
    const perPixel = getPerPixel(xMin, xMax, yMin, yMax, width, height)
    for (let x = 0; x < width; x += 1) {
        for (let y = 0; y < height; y += 1) {
            const [Z0r, Z0i] = convertPxToComplex(
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
            let Zi = Z0i
            let Zr = Z0i
            let Ti = 0
            let Tr = 0
            let n = 0

            for (; n < iterMax && Tr + Ti <= 4; n += 1) {
                Zi = 2 * Zi * Zr + 0.745
                Zr = Tr - Ti - 0.123
                Tr = Zr * Zr
                Ti = Zi * Zi
            }
            iterations[index++] = n
            if (n > max) max = n
            if (n < min) min = n
        }
    }
    return { iterations, min, max }
}

export default juliaSet
