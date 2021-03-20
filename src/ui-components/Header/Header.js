import React from 'react';
import Component from "../Component";
import styles from './styles';
import {withResizer} from "../../HOCs";
import {safeCall} from "../../utils";


class Header extends Component {
    styles=styles;

    createNavButton = (text,callback) => {
        <div onClick={() => safeCall(callback)}></div>
    }

    render() {
        return (
            <div style={this.gs('container')}>

                <div style={this.gs('nav-container')}>

                </div>
            </div>
        );
    }
}

export default withResizer(Header);