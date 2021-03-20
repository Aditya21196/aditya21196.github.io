import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ResizeActions from './redux/actions';
import { debounce } from '../../utils';
import view from '../../Enums';

class ResizeHandler extends React.Component {

    constructor(props) {
        super(props);
        this.handleResize();
    }

    handleResize = () => {
    
        if(typeof window != 'undefined'){
            this.props.resizeActions.updateHeight(window.innerHeight);
            this.props.resizeActions.updateWidth(window.innerWidth);
            this.props.resizeActions.updateViewMode(window.innerWidth > 1023 ? view.DESKTOP : window.innerWidth > 479 ? view.TAB : view.MOBILE);
        }
    };

    componentDidMount = () => window.addEventListener('resize', debounce(this.handleResize, 300));

    componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);

    render = () => null;

}

const mapStateToProps = state => ({ resizeData: state.resizeReducer });

const mapDispatchToProps = dispatch => ({ resizeActions: bindActionCreators(ResizeActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(ResizeHandler);