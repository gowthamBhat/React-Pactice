import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.handler}>click to call parent</button>
        </div>
    )
}

export default ChildComponent