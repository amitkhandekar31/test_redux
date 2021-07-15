import { SET_COLORS } from "../types";

const initialState = {
    selectedColor: "#f4f4f4"
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return {
                ...state,
                selectedColor: action.payload
            }
        default:
            return { ...state };
    }
}