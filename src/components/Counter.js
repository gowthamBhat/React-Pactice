import React, { Component } from 'react';

class CounterCal extends Component {

    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    counterPlus() {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        const { counter } = this.state; //object destructuring of state
        this.setState((preState) => ({  // multiple state calls na react bundle madbiathe so object pass ado badlu 
            counter: preState.counter + 1 //so object pass mado bandlu function pass madbeku 
        }), console.log(counter));//avaga previous state value na use madi increment madbodu
    } //set state admele yenadru update madbek andre adna next parameter agi pass madbek, console.log 
    //madidivala hage
    doublePlus() {
        this.counterPlus()
        this.counterPlus()
    }
    render() {
        return (<div>
            <p>counter value {this.state.counter}</p>
            <button onClick={() => this.doublePlus()}>increase counter</button>
        </div>);
    }
}
export default CounterCal;