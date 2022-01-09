/** @format */
import React from 'react'
import PropTypes from 'prop-types'

function Panel({ state }) {
    return (
        <div className="absolute top-2 left-2">
            <div className="flex flex-col p-2 items-center">
                <p className="text-matrix-green mb-2">Intervall for x</p>
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.xMin}
                    onChange={}
                />
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.xMax}
                />
                <p className="text-matrix-green mb-2">Intervall for y</p>
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.yMin}
                />
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.yMax}
                />
                <p className="text-matrix-green mb-2">Increase crispness</p>
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.yMin}
                />
                <button
                    className="text-matrix-green border-2 border-matrix-green rounded m-2 p-1 w-1/2"
                    type="button"
                >
                    Apply
                </button>
            </div>
        </div>
    )
}

Panel.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
}
export default Panel
