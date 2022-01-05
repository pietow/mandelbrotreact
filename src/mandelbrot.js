/** @format */

function mandelbrot(x, y) {
    const c_re = -2 + x / 100
    const c_im = -1 + y / 100
    const black = { r: 0, g: 0, b: 0, a: 255 }
    const white = { r: 0, g: 0, b: 0, a: 0 }
    const iterArr = []
    let temp_re = c_re
    let temp_im = c_im
    iterArr.push(temp_re ** 2 + temp_im)

    for (let i = 0; i < 10; i += 1) {
        temp_re = temp_re ** 2 - temp_im ** 2 + c_re
        temp_im = 2 * temp_im * temp_re + c_im
        iterArr.push(temp_re ** 2 + temp_im)
    }
    if (iterArr.slice(-1) >= 4) {
        return white
    }
    return black
}

export default mandelbrot
