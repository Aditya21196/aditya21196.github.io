import React from 'react';
import PropTypes from 'prop-types';
import { path } from '../utils';
import view from '../Enums';

class Component extends React.PureComponent{
    styles = {}
    gs = (key) => path(this.styles, `${key}.${this.getViewMode()}`, {});
    getViewMode = () => this.props.viewMode || path(this.props.resizeData, 'view_mode', view.DESKTOP);
}

Component.propTypes = {
    resizeData: PropTypes.object, // to be connected through redux from resizeReducer
};

export default Component;