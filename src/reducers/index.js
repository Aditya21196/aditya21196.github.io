import resizeReducer from '../ui-components/ResizeHandler/redux/reducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    resizeReducer
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };
  export default rootReducer;
