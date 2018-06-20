import './assets/styles/app.scss'
import logo from './assets/images/logo.svg'
import "babel-polyfill";

var mountNode = document.getElementById("app");

import preact from 'preact';

import { h, render } from 'preact';

render((
    <div className="a">
        <img src={logo}/>
        <span>Hello, world!</span>
        <button onClick={e => alert("hi!")}>Click Me</button>
    </div>
), mountNode, mountNode.firstElementChild);