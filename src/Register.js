import React, { Component } from 'react'
import { auth } from 'firebase'
class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        auth
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                console.log('Response', response)
            })
            .catch(error => {
                console.error(`Error: ${error.code} ${error.message}`)
            })
        this.setState({ email: '', password: '' })
        event.preventDefault()

    }



    render() {
        return (
            <div>
                <h2>Register:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} type="email" name="email" placeholder="E-mail" value={this.state.email} />
                    </div>
                    <div>
                        <input onChange={this.handleChange} type="password" name="password" placeholder="Password" value={this.state.password} />
                    </div>
                    <div>
                        <input onChange={this.handleChange} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Register