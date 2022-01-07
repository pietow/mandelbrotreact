/** @format */

import React, { useEffect, useRef } from 'react'
import convertPxToComplex from './converter'
import mandelbrot from './mandelbrot'
import getPerPixel from './getPerPixel'

function Canvas() {
    const CanvasRef = useRef(null)
    const xMin = -2
    const xMax = 1
    const yMin = -1
    const yMax = 1

    useEffect(() => {
        const iterMax = 18
        let max = 0
        let min = iterMax
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        // to increase performance createImageData method
        // should be executed once e.g. before drawing
        const image = context.createImageData(canvas.width, canvas.height)
        const { data } = image
        console.log(image)

        function drawPixel(x, y, color) {
            const index = 4 * (canvas.width * y + x)
            let offset = 0

            data[index + offset++] = color.r
            data[index + offset++] = color.g
            data[index + offset++] = color.b
            data[index + offset] = color.a
        }

        function swapBuffer() {
            context.putImageData(image, 0, 0)
        }

        const t1 = new Date()

        const perPixel = getPerPixel(
            xMin,
            xMax,
            yMin,
            yMax,
            canvas.width,
            canvas.height,
        )
        const iterations = new Uint32Array(image.data.buffer) // Array buffer is an array of bytes
        for (let x = 0; x < canvas.width; x += 1) {
            for (let y = 0; y < canvas.height; y += 1) {
                const [Cr, Ci] = convertPxToComplex(
                    x,
                    y,
                    xMin,
                    xMax,
                    yMin,
                    yMax,
                    canvas.width,
                    canvas.height,
                    perPixel,
                )
                const color = mandelbrot(Cr, Ci, iterMax)
                const { n } = color
                if (n > max) max = n
                if (n < min) min = n
                drawPixel(x, y, color)
            }
        }

        swapBuffer()

        const t2 = new Date()
        const dt = t2 - t1

        console.log(`elapsed time = ${dt} ms`)
        /* console.log('min', min) */
        /* console.log('max', max) */
    })

    return (
        <div className="flex items-center h-screen">
            <canvas
                ref={CanvasRef}
                className="border-2 mx-auto border-gray-500"
                width="100"
                height="100"
            />
        </div>
    )
}

export default Canvas
