import React, { Component } from 'react'

class FormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'node js'
        }
    }
    inputController = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    commentsController = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    topicController = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    submitController = (event) => {
        alert(`${this.state.username} says ${this.state.comments} on ${this.state.topic} topic`);
        event.preventDefault()
    }


    render() {

        return (
            <form className='primaryForm' autoComplete="off" onSubmit={this.submitController}>
                <div>
                    <label>username</label> <br />
                    <input type="textbox" name="username" value={this.state.username} onChange={this.inputController} /> <br />
                    <label>your comments</label> <br />
                    <textarea value={this.state.comments} onChange={this.commentsController}></textarea> <br />
                    <label>choose your topic</label> <br />
                    <select value={this.state.topic} onChange={this.topicController}>
                        <option>Node js</option>
                        <option>Deno</option>
                        <option>Graphql</option>
                    </select> <br />
                    <br />
                    <input type="submit" />
                </div>
            </form>
        )
    }
}
export default FormComponent