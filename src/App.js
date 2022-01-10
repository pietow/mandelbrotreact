/** @format */

import React, { useReducer } from 'react'
import './App.css'
import Canvas from './Canvas'
import JuliaCanvas from './JuliaCanvas'
import Panel from './Panel'
import { initialState, paraReducer } from './paraReducer'

function App() {
    const [state, dispatch] = useReducer(paraReducer, initialState)
    return (
        <div className="flex ">
            <Canvas state={state} dispatch={dispatch} />
            <JuliaCanvas state={state} dispatch={dispatch} />
            <Panel state={state} dispatch={dispatch} />
        </div>
    )
}

export default App
