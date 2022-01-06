/** @format */

function mandelbrot(Cr, Ci) {
    let Zi = 0
    let Zr = 0
    let Ti = 0
    let Tr = 0
    let n = 0

    for (; n < 10; n += 1) {
        Zi = 2 * Zi * Zr + Ci
        Zr = Tr - Ti + Cr
        Tr = Zr * Zr
        Ti = Zi * Zi
        console.log('konvergenz |Z_0-10|', Zr)
    }
    return [n, Zi, Zr]
}

export default mandelbrot
