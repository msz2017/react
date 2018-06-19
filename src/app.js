import './assets/styles/app.scss'
import logo from './assets/images/logo.svg'
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";


class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <div><img src={logo} /></div>
                <div> Hello {this.props.name}</div>
            </div>)
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);