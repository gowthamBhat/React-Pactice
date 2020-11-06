import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            message: "Easy Peasy"
        }

    }
    cont() {
        this.setState({
            message: "yes it is"
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={() => this.cont()}>click me</button>
                {/* <button onClick={this.cont}>click me</button> hige call madidre error barathe iga event binding madilla so, only in class components */}
            </div>
        );
    }
} //event handler arrow function madidre on click call madtha adna this.count cal madidru error baralla
//cont() method na arrow function madebk const cont = ()=>{ }
export default Welcome;
//props are immutable but state are not
//thers a litte bit change in writing the functions in react for dom may be 
//this.state ={} state create madodu
//this.setState({}) haki state change madodu
//state access madodu this.state haki props na this.props haki (in class components)