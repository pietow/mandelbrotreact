/** @format */
import HSLToRGB from './HSLToRGB'

function genColor(min, max) {
    const colorTable = []
    for (let i = min; i <= max + 1; i++) {
        let hue = 210
        let saturation = 54
        let lightness = 10
        let alpha = 0.3
        if (i < max - 75) {
            hue = 271
            saturation = 100
            lightness = (i / max) * 100
            alpha = 0.8
        }
        const rgba = HSLToRGB(hue, saturation, lightness, alpha)

        colorTable.push(rgba)
        /* colorTable[100].r = 255 */
        /* console.log(colorTable) */
    }
    return colorTable
}

export default genColor
