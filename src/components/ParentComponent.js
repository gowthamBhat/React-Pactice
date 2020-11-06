import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: "gowtham"
        }
        this.popHandler = this.popHandler.bind(this)
    }

    popHandler() {
        alert(`parent name is ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
                {/* passing method as a props to child component */}
                <ChildComponent handler={this.popHandler} />
            </div>
        )
    }
}

export default ParentComponent
