import React from 'react'
import '../css/Header.css'
import Products from './Products'
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
    return (

        <nav class="navbar navbar-expand-lg">
            <div class="container">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>

                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink class="nav-link" to="Home" activeClassName="btn btn-primary">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/Products" activeClassName="btn btn-primary">products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/Dashboard" activeClassName="btn btn-primary" >Dashboard</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="About" activeClassName="btn btn-primary">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="Contactus" activeStyle={{ color: "red" }}>Contactus</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="Login" activeClassName="btn btn-primary">login</NavLink>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btncolor" type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </nav>


    )
}
