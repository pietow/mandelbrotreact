/** @format */

function getPerpixel(xMin, xMax, yMin, yMax, width, height) {
    const xPerPixel = (xMax - xMin) / width
    const yPerPixel = (yMax - yMin) / height
    console.log('yPerPixel', yPerPixel)
    console.log('xPerPixel', xPerPixel)
    return yPerPixel > xPerPixel ? yPerPixel : xPerPixel
}

export default getPerpixel
