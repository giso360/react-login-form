import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SimpleLoginFc() {

    const [usn, setUsn] = useState('')
    const [pwd, setPwd] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

    const axiosCall = async () => {
        console.log(usn)
        console.log(pwd)
        const user = await axios.get(`http://localhost:3001/users?name=${usn}&pwd=${pwd}`)
        console.log(user.data.length)
        if (user.data.length === 1) {
            setAuthenticated(true)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axiosCall();
        window.location = (authenticated) ? `${window.location}user/${usn}` : window.location
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={usn} onChange={(event) => setUsn(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={pwd} onChange={(event) => setPwd(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
