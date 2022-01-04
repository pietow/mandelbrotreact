/** @format */

import React, { useEffect, useRef } from 'react'

function Canvas() {
    const CanvasRef = useRef(null)

    useEffect(() => {
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        // to increase performance createImageData method
        // should be executed once e.g. before drawing
        const image = context.createImageData(canvas.width, canvas.height)
        const { data } = image

        function drawPixel(x, y, color) {
            const roundedX = Math.round(x)
            const roundedY = Math.round(y)

            const index = 4 * (canvas.width * roundedY + roundedX)

            data[index + 0] = color.r
            data[index + 1] = color.g
            data[index + 2] = color.b
            data[index + 3] = color.a
        }

        function swapBuffer() {
            context.putImageData(image, 0, 0)
        }

        const colors = [
            { r: 255, g: 0, b: 0, a: 255 }, // red
            { r: 0, g: 255, b: 0, a: 255 }, // green
            { r: 0, g: 0, b: 255, a: 255 }, // blue
        ]

        const t1 = new Date()

        for (let i = 0; i < 10000; i += 1) {
            const x = canvas.width * Math.random()
            const y = canvas.height * Math.random()
            const color = colors[i % colors.length]

            drawPixel(x, y, color)
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
            />
        </div>
    )
}

export default Canvas
