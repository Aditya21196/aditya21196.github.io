import React from 'react';
import Component from "../../../../ui-components/Component";
import styles from './styles';
import {withResizer} from "../../../../HOCs";
import classes from './classes.module.css';

class Intro extends Component {
    styles=styles;
    render() {
        return (
            <div style={this.gs('container')} className={classes.text}>
                <div style={this.gs('name-container')}>
                    <span style={this.gs('big-text')}>Aditya Chawla</span>
                    <span style={this.gs('describe-text')}>Developer. Researcher. Startup Enthusiast.</span>
                </div>
            </div>
        );
    }
}

export default withResizer(Intro);