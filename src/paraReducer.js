/** @format */
import getPerPixel from './getPerPixel'
import convertPxToComplex from './converter'

export const initialState = {
    xMin: -2,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    iterMax: 100,
    width: 1000,
    height: 1000,
    in_xMin: -2,
    in_xMax: 1,
    in_yMin: 1,
    in_yMax: -1,
    in_iterMax: 100,
    in_width: 1000,
    in_height: 1000,
    perPixel: 0,
}
export function paraReducer(state, action) {
    switch (action.type) {
        case 'set_xMin': {
            return { ...state, xMin: state.in_xMin }
        }
        case 'set_xMax': {
            return { ...state, xMax: state.in_xMin }
        }
        case 'set_yMin': {
            return { ...state, yMin: state.in_yMin }
        }
        case 'set_yMax': {
            return { ...state, yMax: state.in_yMax }
        }
        case 'set_iterMax': {
            return { ...state, iter: state.in_iterMax }
        }
        case 'set_width': {
            return { ...state, width: state.in_width }
        }
        case 'set_height': {
            return { ...state, height: state.in_height }
        }
        case 'set_in_xMin': {
            return { ...state, in_xMin: action.input }
        }
        case 'set_in_xMax': {
            return { ...state, in_xMax: action.input }
        }
        case 'set_in_yMin': {
            return { ...state, in_yMin: action.input }
        }
        case 'set_in_yMax': {
            return { ...state, in_yMax: action.input }
        }
        case 'set_in_iterMax': {
            return { ...state, in_iterMax: action.input }
        }
        case 'set_in_width': {
            return { ...state, in_width: action.input }
        }
        case 'set_in_height': {
            return { ...state, in_height: action.input }
        }
        case 'set_all_parameters': {
            const { in_xMin, in_xMax, in_yMin, in_yMax, in_width, in_height } =
                state
            return {
                xMin: state.in_xMin,
                xMax: state.in_xMax,
                yMin: state.in_yMin,
                yMax: state.in_yMax,
                iterMax: state.in_iterMax,
                width: state.in_width,
                height: state.in_height,
                in_xMin: state.in_xMin,
                in_xMax: state.in_xMax,
                in_yMin: state.in_yMin,
                in_yMax: state.in_yMax,
                in_iterMax: state.in_iterMax,
                in_width: state.in_width,
                in_height: state.in_height,
                perPixel: getPerPixel(
                    in_xMin,
                    in_xMax,
                    in_yMin,
                    in_yMax,
                    in_width,
                    in_height,
                ),
            }
        }
        case 'get_per_Pixel': {
            const { xMin, xMax, yMin, yMax, width, height } = state
            return {
                ...state,
                perPixel: getPerPixel(xMin, xMax, yMin, yMax, width, height),
            }
        }
        case 'get_coordinates': {
            const { xMin, xMax, yMin, yMax, width, height, perPixel } = state

            const [Zr, Zi] = convertPxToComplex(
                action.x,
                action.y,
                xMin,
                xMax,
                yMin,
                yMax,
                width,
                height,
                perPixel,
            )
            return {
                ...state,
                Zr,
                Zi,
            }
        }
        default: {
            throw Error(`Unkown action: ${action.type}`)
        }
    }
}
