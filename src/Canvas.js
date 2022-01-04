/** @format */

import React, { useEffect, useRef } from 'react'

function Canvas() {
    const CanvasRef = useRef(null)

    useEffect(() => {
        const draw = (ctx, frameCount) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = '#000000'
            ctx.beginPath()
            ctx.arc(
                50,
                100,
                20 * Math.sin(frameCount * 0.05) ** 2,
                0,
                2 * Math.PI,
            )
            ctx.fill()
        }
        const canvas = CanvasRef.current
        const context = canvas.getContext('2d')

        let frameCount = 0
        let animationFrameId

        // Our draw came here
        const render = () => {
            // counter
            frameCount += 1
            // takes frame counter is the radius of the circle
            draw(context, frameCount)
            // Reqursive call
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            // cancle animation after canvas component is unmounted
            window.cancelAnimationFrame(animationFrameId)
        }
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
