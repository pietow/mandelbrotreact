/** @format */
function drawPixel(x, y, n, colorTable, data, width) {
    const index = 4 * (width * y + x)
    let offset = 0

    data[index + offset++] = colorTable[n].r
    data[index + offset++] = colorTable[n].g
    data[index + offset++] = colorTable[n].b
    data[index + offset] = colorTable[n].a
}
export default drawPixel
