import { connect } from 'react-redux';

export const withResizer = connect(state => ({ resizeData: state.resizeReducer }), null, null, { forwardRef: true });