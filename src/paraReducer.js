/** @format */

export const initialState = {
    xMin: -2,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    iterMax: 100,
    widht: 1000,
    height: 1000,
    in_xMin: 0,
    in_xMax: 0,
    in_yMin: 0,
    in_yMax: 0,
    in_iterMax: 0,
    in_widht: 0,
    in_height: 0,
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
            return { ...state, iter: state.in_iter }
        }
        case 'set_width': {
            return { ...state, width: state.in_width }
        }
        case 'set_height': {
            return { ...state, height: state.in_height }
        }
        case 'set_in_xMin': {
            return { ...state, in_xMin: state.in_xMin }
        }
        case 'set_in_xMax': {
            return { ...state, in_xMax: state.in_xMin }
        }
        case 'set_in_yMin': {
            return { ...state, in_yMin: state.in_yMin }
        }
        case 'set_in_yMax': {
            return { ...state, in_yMax: state.in_yMax }
        }
        case 'set_in_iterMax': {
            return { ...state, in_iter: state.in_iter }
        }
        case 'set_in_width': {
            return { ...state, in_width: state.in_width }
        }
        case 'set_in_height': {
            return { ...state, in_height: state.in_height }
        }
        default: {
            throw Error(`Unkown action: ${action.type}`)
        }
    }
}
