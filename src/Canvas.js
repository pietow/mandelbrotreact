/** @format */

import React, { useEffect, useRef } from 'react'
import mandelbrot from './mandelbrot'
import convertPxToComplex from './converter'

function Canvas() {
    const CanvasRef = useRef(null)

    useEffect(() => {
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        // to increase performance createImageData method
        // should be executed once e.g. before drawing
        const image = context.createImageData(canvas.width, canvas.height)
        const { data } = image
        console.log(image)

        function drawPixel(x, y, color) {
            const roundedX = x
            const roundedY = y

            const index = 4 * (canvas.width * roundedY + roundedX)

            data[index + 0] = color.r
            data[index + 1] = color.g
            data[index + 2] = color.b
            data[index + 3] = color.a
        }

        function swapBuffer() {
            context.putImageData(image, 0, 0)
        }

        const t1 = new Date()

        for (let x = 0; x < canvas.width; x += 1) {
            for (let y = 0; y < canvas.height; y += 1) {
                const [Cr, Ci] = convertPxToComplex(
                    x,
                    y,
                    -2,
                    1,
                    -1,
                    1,
                    canvas.width,
                    canvas.height,
                )
                const color = mandelbrot(Cr, Ci)
                drawPixel(x, y, color)
            }
        }

        swapBuffer()

        const t2 = new Date()
        const dt = t2 - t1

        console.log(`elapsed time = ${dt} ms`)
    }, [])

    return (
        <div className="flex items-center h-screen">
            <canvas
                ref={CanvasRef}
                className="border-2 mx-auto border-gray-500"
                width="1200"
                height="800"
            />
        </div>
    )
}

export default Canvas