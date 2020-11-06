import React, { Component } from 'react'

class ConditionalRenderning extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        // return this.state.isLoggedIn ? (
        //     <div>logged in</div>
        // ) : (
        //         <div>not logged in</div>
        //     )
        if (this.state.isLoggedIn) {
            return <p>LoggedIn</p>
        }
        else {
            return <p>not logged in</p>
        }
    }
}

export default ConditionalRenderning
