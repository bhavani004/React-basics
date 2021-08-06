import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory()

    const handleSubmit = ()=>{
          history.push('/')
    }
    return (
        <div>
            <h1>from login</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Email:</label><br />
                <input type="email" name="email" /><br />
                <label for="Password">Password:</label><br />
                <input type="Password" name="Password" /><br /><br />
                <input type="submit" value="Submit" />

            </form>
           
          
        </div>
    )
}
