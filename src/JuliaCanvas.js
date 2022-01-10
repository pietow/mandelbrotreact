/** @format */

import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
/* import mandelbrot from './mandelbrot' */
import genColor from './genColor'
import drawPixel from './drawPixel'
import juliaSet from './juliaSet'

function JuliaCanvas({ state, dispatch }) {
    const CanvasRef = useRef(null)
    const { width, height, xMin, xMax, yMin, yMax, iterMax } = state

    useEffect(() => {
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        const image = context.createImageData(canvas.width, canvas.height)
        const { data } = image

        function swapBuffer() {
            context.putImageData(image, 0, 0)
        }

        const t1 = new Date()

        const mandelObj = juliaSet(
            xMin,
            xMax,
            yMin,
            yMax,
            canvas.width,
            canvas.height,
            iterMax,
        )
        const { iterations, min, max } = mandelObj
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
    }, [xMin, xMax, yMin, yMax, iterMax])

    return (
        <div className="w-fit border-black relative">
            <p className="text-matrix-green absolute top-2 inset-x-2/4 w-1/2">
                {state.Zr
                    ? `${state.Zr.toFixed(5)} + i * ${state.Zi.toFixed(5)}`
                    : 'Move cursor over canvas'}
            </p>
            <canvas
                ref={CanvasRef}
                className=" border-gray-500"
                width={width}
                height={height}
                onMouseMove={(e) => {
                    dispatch({
                        type: 'get_per_Pixel',
                    })
                    dispatch({
                        type: 'get_coordinates',
                        x: e.clientX,
                        y: e.clientY,
                    })
                }}
            />
        </div>
    )
}

JuliaCanvas.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default JuliaCanvas
