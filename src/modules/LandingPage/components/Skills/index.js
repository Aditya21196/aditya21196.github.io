import React from 'react';
import Component from "../../../../ui-components/Component";
import styles from './styles';
import {withResizer} from "../../../../HOCs";
import Flash from "react-reveal/src/simple/Flash";
import {SKILLS} from "../../../../Enums";
import Fade from "react-reveal/Fade";


class Skills extends Component {
    styles=styles;
    render() {
        return (
            <div style={this.gs('container')}>
                <Flash><div style={this.gs('heading')}>SKILLS</div></Flash>
                <ul>
                    <Fade delay={800} cascade>
                    {SKILLS.map((s,i) => <li style={this.gs('skill-item')} id={`skill_${i}`}>{s}</li>)}
                    </Fade>
                </ul>

                <Fade delay={1200}>
                <div style={{fontSize:16}}>
                    I have worked on a wide variety of projects, some of which are available on my <a href={'https://github.com/aditya21196'} target='_blank'>github</a>.
                    Also, here are the links to my <a href={'https://www.linkedin.com/in/aditya21196/'} target='_blank'>LinkedIn</a> and <a href={'https://leetcode.com/aditya21196/'} target='_blank'>Leetcode</a> profiles.
                </div>
                </Fade>
            </div>



        );
    }
}

export default withResizer(Skills);