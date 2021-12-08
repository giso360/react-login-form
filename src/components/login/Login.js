import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class Login extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }

    }

    handleSubmit = (e) => {
        
        e.preventDefault()
        const usn = e.target[0].value
        const pwd = e.target[1].value
        console.log(usn)
        this.setState({user: usn})
        console.log(this.state)
       
    }

    handleChangeUsername = (e) => {
        let { password } = this.state;
        this.setState({
            username: e.target.value,
            password: password
        })
        console.log(this.state)
    }

    handleChangePassword = (e) => {
        let { username } = this.state;
        this.setState({
            username: username,
            password: e.target.value
        })
        console.log(this.state)

    }

    render() {
        
        return (
            <>

                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail" onChange={this.handleChangeUsername}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="string" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" onChange={this.handleChangePassword}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>

                </Form>

                <Link to="/signup">
                    <Button variant="danger" type="submit">
                        Sign Up
                    </Button>
                </Link>

                <Link to="/other">
                    <Button variant="dark" type="submit">
                        Other
                    </Button>
                </Link>

            </>
        )
    }

}
