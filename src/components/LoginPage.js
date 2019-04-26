import React from 'react'
import { Link } from 'react-router-dom';

import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

class LoginPage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="row" id="logout-message">
                        <div className="col-sm-8 col-lg-6 col-xl-4 mx-auto alert alert-success alert-dismissible text-center fade show" role="alert">
                            <strong>You have successfully logged out.</strong>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                        <img className="img-fluid" src="./assets/img/black-logo.png" alt="Logo" width="180px" /></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 col-lg-6 col-xl-4 mx-auto">
                            <h2 className="text-center mb-3">Sign In</h2>
                            <form id="sign-in" className="form-signin needs-validation" method="post" action="" noValidate>

                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text input-group-addon-e"><i
                                                className="fa fa-envelope color-blue"></i></span>
                                    </div>
                                    <input id="email" name="email" placeholder="Email Address" className="form-control form-control-lg" type="email" required />
                                </div>

                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text input-group-addon-p"><i className="fa fa-key color-blue"></i></span>
                                    </div>
                                    <input id="password" name="password" placeholder="Password" className="form-control form-control-lg"
                                        type="password" minLength="5" required />
                                    <div id="password-error" className="invalid-feedback"></div>
                                </div>
                                <div id="email-error" className="invalid-feedback"></div>

                                <div className="custom-control custom-checkbox mb-3 mt-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>

                                <input type="submit" value="Sign In" className="btn btn-lg btn-primary btn-block" />
                                <h5 className="text-center mt-3 mb-3"><Link to="#" className="text-primary plain-link">Forgot
                                    Password?</Link></h5>

                                <FacebookLoginButton className="social-buttons" onClick={() => alert("Hello")} />
                                <GoogleLoginButton className="social-buttons" onClick={() => alert("Hello")} />
                            </form>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default LoginPage