/** @format */

function mandelbrot(Cr, Ci, iterMax) {
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

    if (Tr + Ti <= 4) return { r: 0, g: 0, b: 0, a: 255, n }
    return { r: 0, g: 0, b: 0, a: 0, n }
}

export default mandelbrot
