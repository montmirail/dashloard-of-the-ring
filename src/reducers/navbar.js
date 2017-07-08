import { PREVIOUS_DATE, NEXT_DATE } from '../actions';

const initialState = {
    index: 0
};

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case PREVIOUS_DATE:
            if(state.index > 0) {
                let newState = { ...state, index: state.index -= 1 };
                return newState;
            } else {
                return state;
            }
        case NEXT_DATE:
            if(state.index < 2) {
                let newState = { ...state, index: state.index += 1 };
                return newState;
            } else {
                return state;
            }
        default:
            return state;
    }

}