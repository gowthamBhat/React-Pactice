import React, { Component } from 'react';

class Greetings2 extends Component { //class should have extends Component class and have a render method
    render() {
        return (
            <div>
                <h2>from a class component</h2>
                <h3>{this.props.children}</h3>
            </div>
        );

    }
} //class component
//name ilde pass mado data na props.children haki use madthivi
export default Greetings2;