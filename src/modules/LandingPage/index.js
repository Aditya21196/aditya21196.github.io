import {withResizer} from "../../HOCs";
import React from 'react';
import Component from "../../ui-components/Component";
import styles from './styles';
import Header from "../../ui-components/Header/Header";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact";


class LandingPage extends Component {
    styles = styles;

    render() {
        return (
            <>
                <Header/>
                <Intro/>
                <Resume/>
                <Skills/>
                <ContactMe/>
            </>

        );
    }
}

export default LandingPage;
