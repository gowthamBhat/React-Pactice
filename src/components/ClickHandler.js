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
<<<<<<< HEAD
//class component ali function na method thara treat madbeku
//access madoke this keyword use madbeku
=======
>>>>>>> 930dcad3ef9b67c7de282818bc4d153064a851b9
export { HandleEvent }
export default ClickHandler
