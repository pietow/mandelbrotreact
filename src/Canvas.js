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
        const iterMax = 100
        let max = 0
        let min = iterMax
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        const image = context.createImageData(canvas.width, canvas.height)
        const { data } = image

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

        const iterations = []
        let count = 0
        for (let x = 0; x < canvas.width; x += 1) {
            for (let y = 0; y < canvas.height; y += 1) {
                const color = mandelbrot(
                    x,
                    y,
                    xMin,
                    xMax,
                    yMin,
                    yMax,
                    canvas.width,
                    canvas.height,
                    iterMax,
                )
                const { n } = color
                iterations[count] = n
                count += 1
                if (n > max) max = n
                if (n < min) min = n
            }
        }
        const colorTable = []

        const maxlog = Math.log(1 + max - min)
        for (let i = min; i <= max; i++) {
            const byteNum = Math.ceil((Math.log(1 + i - min) / maxlog) * 255)
            colorTable.push({
                r: 0,
                g: byteNum,
                b: byteNum,
                a: byteNum,
            })
        }
        colorTable.push({ r: 0, g: 0, b: 0, a: 0 })
        for (let i = 0; i < iterations.length; i++) {
            iterations[i] = colorTable[iterations[i]]
        }
        count = 0
        for (let x = 0; x < canvas.width; x += 1) {
            for (let y = 0; y < canvas.height; y += 1) {
                drawPixel(x, y, iterations[count])
                count += 1
            }
        }

        swapBuffer()

        const t2 = new Date()
        const dt = t2 - t1

        console.log(`elapsed time = ${dt} ms`)
    })

    return (
        <div className="flex items-center h-screen">
            <canvas
                ref={CanvasRef}
                className="border-2 mx-auto border-gray-500"
                width="1000"
                height="1000"
            />
        </div>
    )
}

export default Canvas
