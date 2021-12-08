import React, { Component } from 'react'
import axios from 'axios'

export default class SimpleLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usn: '',
            pwd: '',
            authenticated: false,
            tries: 0
        }
    }

    axiosCall = async () => {
        const user = await axios.get(`http://localhost:3001/users?name=${this.state.usn}&pwd=${this.state.pwd}`)
        if (user.data.length === 1) {
            this.setState(
                {
                    usn: this.state.usn,
                    pwd: this.state.pwd,
                    authenticated: true,
                    tries: this.state.tries + 1
                }
            )
        } else {
            this.setState(
                {
                    usn: this.state.usn,
                    pwd: this.state.pwd,
                    authenticated: false,
                    tries: this.state.tries + 1
                }
            )
            document.getElementById('loginform')[0].value = ''
            document.getElementById('loginform')[1].value = ''
        }
    }

    handleSubmit = async (event) => {
        console.log(this.state)
        event.preventDefault();
        await this.axiosCall();
        if(this.state.authenticated){
            window.location = `${window.location}user/${this.state.usn}`
        }
    }

    handleChangeUserName = (event) => {
        this.setState(
            {
                usn: event.target.value,
                pwd: this.state.pwd,
                authenticated: false,
                tries: this.state.tries
            }
        );
    }

    handleChangePassword = (event) => {
        this.setState(
            {
                usn: this.state.usn,
                pwd: event.target.value,
                authenticated: false,
                tries: this.state.tries
            }
        );
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} id={'loginform'}>
                    <label>
                        Username:
                        <input type="text" value={this.state.usn} onChange={this.handleChangeUserName} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.pwd} onChange={this.handleChangePassword} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
                {
                    (this.state.tries != 0 && this.state.authenticated != true) ? <div style={{display:'none'}}>Wrong Username and or password</div> : <div>Wrong Username and or password</div>
                }
            </>
        )
    }
}
