import React from 'react'
import '../css/Footer.css'
export default function Footer() {
    return (
        <div class="footer-section">
            <div class="container">
                <ul class="nav justify-content-center">
                    <li class="nav-items">
                        <a class="nav-link" href="#"
                        ><i class="fa fa-facebook fa-lg" aria-hidden="true"></i
                        ></a>
                    </li>
                    <li class="nav-items">
                        <a class="nav-link" href="#"
                        ><i class="fa fa-twitter fa-lg" aria-hidden="true"></i
                        ></a>
                    </li>
                    <li class="nav-items">
                        <a class="nav-link active" href="#"
                        ><i class="fa fa-youtube fa-lg" aria-hidden="true"></i
                        ></a>
                    </li>
                </ul>

            </div>

        </div>
    )
}
