/** @format */

function mandelbrot(x, y, xMax, xMin, yMax, yMin, width, height) {
    const x0 = xMin + (x * (xMax - xMin)) / width
    const y0 = yMin + (y * (yMax - yMin)) / height
    const black = { r: 0, g: 0, b: 0, a: 255 }
    const white = { r: 0, g: 0, b: 0, a: 0 }
    const red = { r: 255, g: 0, b: 0, a: 255 }

    if (x0 === 0) return red
    if (y0 === 0) return red

    let r = x0
    let i = y0

    for (let n = 0; n < 10000; n += 1) {
        const rr = r * r
        const ii = i * i
        if (rr + ii > 4) {
            return white
        }
        i = 2 * r * i + y0
        r = rr + ii + x0
    }

    return black
}

export default mandelbrot
