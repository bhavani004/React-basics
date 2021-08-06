import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Apitask from '../Components/Apitask'
import Login from '../Components/Login'
import UserData from '../Components/UserData'
import Home from '../Components/Home'


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Apitask}/>
                <Route path="/user-data/:id" component={UserData}/>
                <Route exact path="/Home" component={Home}/>
                <Route  path="/Login" component={Login}/>

            </Switch>
            
        </div>
    )
}

export default Routes
