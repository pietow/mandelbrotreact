/** @format */

import React, { useEffect, useRef } from 'react'
import mandelbrot from './mandelbrot'
import genColor from './genColor'
import drawPixel from './drawPixel'

function Canvas() {
    const CanvasRef = useRef(null)
    const xMin = -2
    const xMax = 1
    const yMin = -1
    const yMax = 1

    useEffect(() => {
        const iterMax = 100
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        const image = context.createImageData(canvas.width, canvas.height)
        const { data } = image

        function swapBuffer() {
            context.putImageData(image, 0, 0)
        }

        const t1 = new Date()

        const mandelObj = mandelbrot(
            xMin,
            xMax,
            yMin,
            yMax,
            canvas.width,
            canvas.height,
            iterMax,
        )
        const { iterations, radiusZn, min, max, maxRad, minRad } = mandelObj
        const colorTable = genColor(min, max)
        colorTable[100] = { r: 0, b: 0, g: 0, a: 255 }
        let index = 0
        for (let x = 0; x < canvas.width; x += 1) {
            for (let y = 0; y < canvas.height; y += 1) {
                drawPixel(
                    x,
                    y,
                    iterations[index++],
                    colorTable,
                    data,
                    canvas.width,
                )
            }
        }

        swapBuffer()

        const t2 = new Date()
        const dt = t2 - t1

        console.log(`elapsed time = ${dt} ms`)
    })

    return (
        <div className="border-2">
            <canvas
                ref={CanvasRef}
                className=" border-gray-500"
                width="1000"
                height="1000"
            />
        </div>
    )
}

export default Canvas
