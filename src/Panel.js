/** @format */
import React from 'react'
import PropTypes from 'prop-types'

function Panel({ state, dispatch }) {
    return (
        <div className="absolute top-2 left-2">
            <div className="flex flex-col p-2 items-center">
                <p className="text-matrix-green mb-2">Intervall for x</p>
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.xMin}
                    onChange={(e) => {
                        dispatch({
                            type: 'set_in_xMin',
                            input: Number(e.target.value),
                        })
                    }}
                />
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.xMax}
                    onChange={(e) => {
                        dispatch({
                            type: 'set_in_xMax',
                            input: Number(e.target.value),
                        })
                    }}
                />
                <p className="text-matrix-green mb-2">Intervall for y</p>
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.yMin}
                    onChange={(e) => {
                        dispatch({
                            type: 'set_in_yMin',
                            input: Number(e.target.value),
                        })
                    }}
                />
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.yMax}
                    onChange={(e) => {
                        dispatch({
                            type: 'set_in_yMax',
                            input: Number(e.target.value),
                        })
                    }}
                />
                <p className="text-matrix-green mb-2">Increase crispness</p>
                <input
                    className="border-2 border-matrix-green rounded m-2 p-1"
                    type="number"
                    placeholder={state.iterMax}
                    onChange={(e) => {
                        dispatch({
                            type: 'set_in_iterMax',
                            input: Number(e.target.value),
                        })
                    }}
                />
                <button
                    className="text-matrix-green border-2 border-matrix-green rounded m-2 p-1 w-1/2"
                    type="button"
                    onClick={() => {
                        dispatch({ type: 'set_all_parameters' })
                    }}
                >
                    Apply
                </button>
            </div>
        </div>
    )
}

Panel.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default Panel
