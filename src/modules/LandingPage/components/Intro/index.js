import React from 'react';
import Component from "../../../../ui-components/Component";
import styles from './styles';
import {withResizer} from "../../../../HOCs";
import classes from './classes.module.css';
import Typical from 'react-typical';

class Intro extends Component {
    styles=styles;
    render() {
        return (
            <div style={this.gs('container')} className={classes.text}>
                <div style={this.gs('name-container')}>
                    <span style={this.gs('big-text')}>
                        Aditya Chawla
                    </span>
                    <span style={this.gs('describe-text')}>
                        <Typical
                            steps={['Software Developer.', 500, 'Researcher.', 500,'Startup Enthusiast.',1500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </span>
                </div>
            </div>
        );
    }
}

export default withResizer(Intro);