import React from 'react';

const Greet = (props) => {
    const { name, secondName } = props;  //object Destructuring
    return (
        <div>
            <h1>From a functional component</h1>
            <h3>{name}</h3>
            <h4>{secondName}</h4>
        </div>);
}  //component 1
const AnotherGreet = (props) => {
    return (
        <div>
            <h6>another greet text</h6>
            <h3>{props.children}</h3>
        </div>);
}
//component 2
export { AnotherGreet };
export default Greet