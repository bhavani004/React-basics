import React from 'react'
import Api from '../Components/Api'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Showdata from '../Components/Showdata'
import { Switch,Route } from 'react-router-dom'

export default function Routers() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Api}/>
                <Route path="/user-data/:id" component={Showdata}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Login" component={Login}/>
            </Switch>
        </div>
    )
}
