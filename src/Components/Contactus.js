import React from 'react'
import '../css/Contactus.css'

export default function Contactus() {
    return (
        <div>

            <div class="container">

                <div class="contactform">
                    <h1>contact form</h1>
                    <form>
                        <div class="form-group row">
                            <label class="col-sm-2 col-12 col-form-label">First Name:</label>
                            <div class="col-sm-6 col-12">
                                <input type="email" class="form-control" placeholder="First Name" />
                            </div>
                        </div><br />
                        <div class="form-group row">
                            <label class="col-sm-2 col-12 col-form-label">Last Name:</label>
                            <div class="col-sm-6 col-12">
                                <input type="email" class="form-control" placeholder="Last Name" />
                            </div>
                        </div><br />
                        <div class="form-group row">
                            <label class="col-sm-2 col-12 col-form-label">Email:</label>
                            <div class="col-sm-6 col-12">
                                <input type="email" class="form-control" placeholder="Email" />
                            </div>
                        </div><br />
                        <div class="form-group row">
                            <label class="col-sm-2 col-12 col-form-label">Mobile:</label>
                            <div class="col-sm-6 col-12">
                                <input type="email" class="form-control" placeholder="Mobile" />
                            </div>
                        </div><br />

                        <div class="form-group row">
                            <label class="col-sm-2 col-12 col-form-label">Password:</label>
                            <div class="col-sm-6 col-12">
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>
                        </div><br />
                        <div class="form-group row">
                            <label class="col-sm-2 col-12 col-form-label">Confirm Password:</label>
                            <div class="col-sm-6 col-12">
                                <input type="email" class="form-control" placeholder="Confirm Password" />
                            </div>
                        </div><br />

                        <div class="form-group row">
                            <div class="col-sm-6 col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}
