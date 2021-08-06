import React from 'react'
import '../css/Sidenav.css'
import Bodycontent from './Bodycontent'
import Rightnav from './Rightnav'

export default function Sidenav() {
    return (
        <div class="container-fluid content">
            <div class="row">
                <div class="col-lg-2 col-12">
                    <div class="left-nav">
                        <ul>
                            <li>
                                <a href="">Latest News</a>

                            </li>
                            <li>
                                <a href="" > Explainers</a>



                            </li>
                            <li>
                                <a href="">India</a>
                            </li>
                            <li>
                                <a href="">Entertainment</a>
                            </li>
                            <li>
                                <a href="">Business</a>
                            </li>
                            <li>
                                <a href="">Cricket</a>
                            </li>
                            <li>
                                <a href="">Photos</a>

                            </li>
                            <li>
                                <a href="">World</a>
                            </li>
                            <li>
                                <a href="">Technology</a>
                            </li>
                            <li>
                                <a href="">Viral News</a>
                            </li>
                            <li>
                                <a href="">Lifestyle</a>
                            </li>
                            <li>
                                <a href="">Education</a>
                            </li>
                        </ul>
                    </div>
                </div >
                <div class="col-lg-8 col-12">
                    <Bodycontent  />
                </div>
                <div class="col-lg-2 col-12">
                    <Rightnav />
                </div>
            </div>
        </div>

    )
}
