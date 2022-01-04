/** @format */

import React, { useRef } from 'react'

function Canvas() {
    const CanvasRef = useRef(null)

    return (
        <div>
            <canvas
                ref={CanvasRef}
                className="border-2 border-gray-500 w-screen"
            />
        </div>
    )
}

export default Canvas
