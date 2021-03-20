import React from 'react';
import Component from "../../../../ui-components/Component";
import styles from './styles';
import {withResizer} from "../../../../HOCs";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {RESUME_POINTERS} from "../../../../Enums";
import Flash from "react-reveal/src/simple/Flash";

class Resume extends Component {
    styles=styles;

    renderExperience = (title,pointers=[]) => <div style={this.gs('exp-parent')}>
        <Slide left><div style={this.gs('exp-title')}>{title}</div></Slide>
        <Fade delay={800} cascade>
            <ul>
        {pointers.map((p,i) => <li key={`${title}_exp_${i}`}>{p}</li>)}
            </ul>
        </Fade>
    </div>

    render() {
        return (
            <div style={this.gs('resume-container')}>
                <Flash><div style={this.gs('heading')}>RESUME</div></Flash>
                {RESUME_POINTERS.map(ptr => this.renderExperience(ptr.title,ptr.pointers))}
            </div>
        );
    }
}

export default withResizer(Resume);