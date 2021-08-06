import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import Bodycontent from './Bodycontent'

export default function Home() {
    return (
        <div>
            <h1>from home page</h1>
            <Bodycontent />
<Link to="/Login"><button>Login</button></Link>
        </div>
    )
}
