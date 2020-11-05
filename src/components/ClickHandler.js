import React, { Component } from 'react'

function handleClick() {
    console.log('clicked');
}
function arrowClick() {
    console.log('Arrow click');
}
function ClickHandler() {
    return (
        <div>
            <button onClick={handleClick}>event hand</button>
            <button onClick={() => { arrowClick() }}>event hand through arrow</button>
        </div>
    )
} //we call event through both types, in class theres a diffrence

class HandleEvent extends Component {
    classClick() {
        console.log('class button clicked');
    }
    render() {
        return (

            <div>
                <button onClick={this.classClick}>arrow button</button>
            </div>
        )
    }
}
//class component ali function na method thara treat madbeku
//access madoke this keyword use madbeku
export { HandleEvent }
export default ClickHandler
