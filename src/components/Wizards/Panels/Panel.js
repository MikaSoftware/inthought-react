import React from 'react'
import { Link } from "react-router-dom";

class Panel extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Wizards Panel</h1>
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h4 className="mb-0" 
                                    data-toggle="collapse" 
                                    data-target="#collapseOne" 
                                    aria-expanded="true" 
                                    aria-controls="collapseOne">
                                        1. Checkout Method
                                </h4>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p>
                                                <strong>REGISTER AND SAVE TIME!</strong>
                                            </p>
                                            <p className="mb-0">Fast and simple check out</p>
                                            <p>Quick access to order history</p>
                                            <div className="my-3">
                                                <button className="btn btn-primary" type="button">Register</button>
                                            </div>
                                            <hr className="my-4" />
                                            <button className="btn btn-secondary" type="button">Checkout as Guest</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <p>Already a Member?</p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="login-name" required="" placeholder="Email Address" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="login-password" required="" placeholder="Password" />
                                            </div>
                                            <p>
                                                <Link to="#">Forgot password?</Link>
                                            </p>
                                            <button className="btn btn-primary" type="button">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h4 className="mb-0"
                                    data-toggle="collapse" 
                                    data-target="#collapseTwo" 
                                    aria-expanded="false" 
                                    aria-controls="collapseTwo">
                                    2. Billing Information
                                </h4>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <label>First Name*</label>
                                                <input className="form-control" type="text" name="checkout-name" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input className="form-control" type="text" name="checkout-company" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <label>Last Name*</label>
                                                <input className="form-control" type="text" name="checkout-lastname" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address*</label>
                                                <input className="form-control" type="text" name="checkout-email" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input className="form-control" type="text" name="checkout-address" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <label>City*</label>
                                                <input className="form-control" type="text" name="checkout-city" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Zip/Postal Code*</label>
                                                <input className="form-control" type="text" name="checkout-zip" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Telephone*</label>
                                                <input className="form-control" type="text" name="checkout-telephone" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <label>State/Province*</label>
                                                <input className="form-control" type="text" name="checkout-state" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Country*</label>
                                                <input className="form-control" type="text" name="checkout-country" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Fax</label>
                                                <input className="form-control" type="text" name="checkout-fax" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                    <div className="form-group mt-2 mb-4">
                                        <div className="form-radio custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="ok-email" name="ok-email" value="Yes"
                                                    className="custom-control-input form-check-input" required />
                                            <label className="custom-control-label form-check-label" htmlFor="ok-email">Ship to this address</label>
                                        </div>
                                        <div className="form-radio custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="ok-email2" name="ok-email" value="No"
                                                    className="custom-control-input form-check-input" required />
                                            <label className="custom-control-label form-check-label" htmlFor="ok-email2">Ship to different address</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="pt-2 clearfix">
                                        <p className="float-right text-sm">
                                            <i>Fields marked with (*) are required</i>
                                        </p>
                                        <div className="float-left">
                                            <button className="btn btn-primary" type="button">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
  }
}
export default Panel