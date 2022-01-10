/** @format */

import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
/* import mandelbrot from './mandelbrot' */

function JuliaCanvas({ state }) {
    const CanvasRef = useRef(null)
    const canvas = CanvasRef.current
    const Cr = state.Zr
    const Ci = state.Zi

    useEffect(() => {
        function canvas_to_xy(ij, xmin, xmax, ymin, ymax) {
            return [
                ((xmax - xmin) / (canvas.width - 1)) * ij[0] + xmin,
                ((ymin - ymax) / (canvas.height - 1)) * ij[1] + ymax,
            ]
        }
        // Draw the Julia set using an escape time algorithm

        function julia_iteration_count(cre, cim, x0, y0) {
            let x = x0
            let y = y0
            let xtemp
            let ytemp
            let cnt = 0
            while (x * x + y * y <= 4 && cnt++ < 100) {
                xtemp = x
                ytemp = y
                x = xtemp * xtemp - ytemp * ytemp + cre
                y = 2 * xtemp * ytemp + cim
            }
            return cnt
        }

        function draw_julia_set(c) {
            const xmin = -1.5
            const xmax = 1.5
            const ymin = -1.5
            const ymax = 1.5
            const bail = 100
            const context = canvas.getContext('2d')
            const canvasData = context.createImageData(
                canvas.width,
                canvas.height,
            )

            for (let i = 0; i < canvas.width; i++) {
                for (let j = 0; j < canvas.height; j++) {
                    const xy = canvas_to_xy([i, j], xmin, xmax, ymin, ymax)
                    const it_cnt = julia_iteration_count(
                        c.re,
                        c.im,
                        xy[0],
                        xy[1],
                    )
                    const color = 255 - (255 * it_cnt) / (bail + 1)
                    const idx = (i + j * canvas.width) * 4
                    canvasData.data[idx + 0] = color
                    canvasData.data[idx + 1] = color
                    canvasData.data[idx + 2] = color
                    canvasData.data[idx + 3] = 255
                }
            }
            context.putImageData(canvasData, 0, 0)
        }
        const dummy = Cr ? draw_julia_set({ re: Cr, im: Ci }) : null
        console.log(dummy)
    }, [Cr, Ci, canvas])

    return (
        <div>
            <canvas
                className="border-2"
                ref={CanvasRef}
                height="1000"
                width="1000"
            />
        </div>
    )
}
JuliaCanvas.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default JuliaCanvas
