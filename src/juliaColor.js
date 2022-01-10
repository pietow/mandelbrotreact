/** @format */

function JuliaColor(min, max) {
    const colorTable = []
    for (let i = min; i <= max + 1; i++) {
        const color = 255 - (255 * i) / 101
        colorTable.push({ r: color, g: color, b: color, a: 255 })
    }
    return colorTable
}

export default JuliaColor
