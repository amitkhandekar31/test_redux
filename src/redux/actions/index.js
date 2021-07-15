import { SET_COLORS } from "../types"

export const setColor = (color) => {
    return {
        type: SET_COLORS,
        payload: color
    }
}