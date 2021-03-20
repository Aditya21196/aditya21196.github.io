import * as Actions from './actionTypes';
import initialState from './state';

const resizeReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case Actions.HEIGHT_UPDATE: return { ...state, height: payload };
        
        case Actions.WIDTH_UPDATE: return { ...state, width: payload };
        
        case Actions.VIEW_MODE_UPDATE: return { ...state, view_mode: payload };

        default: return state;

    }

};

export default resizeReducer;