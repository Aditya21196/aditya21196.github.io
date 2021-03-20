import logo from './logo.svg';
import './App.css';
import p5 from 'p5';
import React from 'react';
import Component from './ui-components/Component';
import {withResizer} from './HOCs';
import LandingPage from "./modules/LandingPage";

class App extends Component{
render =() => <LandingPage/>
}

export default withResizer(App);
