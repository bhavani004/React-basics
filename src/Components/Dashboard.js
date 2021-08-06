import React from 'react'
import { Redirect } from 'react-router-dom'
export default function Dashboard() {
    return (
        <div>
            <h1>From dashboard</h1>
            <Redirect to="/login" />
        </div>
    )
}
