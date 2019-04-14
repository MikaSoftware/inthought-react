import React from 'react'
import { Link } from 'react-router-dom'

class Cards extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Cards</h1>
                    <div className="card-group row">
                        <div className="col-sm-3">
                            <div className="mx-auto p-4 signin-box rounded">
                                <h3 className="text-center"><i className="fa fa-lock fa-2x"></i></h3>
                                <h2 className="text-center mb-3">Forgot Password?</h2>
                                <p className="text-center lead">You can reset your password here.</p>
                                <form id="reset-form" autoComplete="off" className="form" method="post">
                                    <div className="form-group mb-4">
                                        <div className="input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text input-group-addon-e">
                                                <i className="fa fa-envelope color-blue"></i>
                                                </span>
                                            </div>
                                            <input id="email" name="email" placeholder="Email Address" className="form-control form-control-lg" type="email" />
                                        </div>
                                    </div>
                                    <input type="submit" value="Reset Password" className="btn btn-lg btn-primary btn-block" />
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to="#">
                                            <strong>Rodolfo Martinez</strong>
                                        </Link>
                                    </h5>
                                    <p className="card-text">1848 Mickleborough Dr<br />
                                        London, ON<br />
                                        (519)521-3135
                                    </p>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card box-shadow text-center mx-auto">
                                <div className="card-custom-top-2">
                                    <i className="fas fa-user fa-3x"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Residential</h3>
                                    <p className="card-text">Add a Residential Client</p>
                                    <Link to="#" className="btn btn-success btn-lg">
                                        Go 
                                        <i className="fas fa-arrow-circle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group row">
                <div className="col-sm-3">
                    <div className="card text-center">
                        <p className="mt-4 pt-3 mb-2"><i className="far fa-file-alt fa-4x text-muted"></i></p>
                        <div className="card-body">
                            <h3 className="card-title">Knowledge Base</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">How to enable labs features</li>
                            <li className="list-group-item">Preparing your server for installation</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                        </ul>
                        <div className="card-body">
                            <Link to="#" className="card-link">See More</Link>
                        </div>
                    </div>            
                </div>
                <div className="col-sm-3">
                    <div className="card text-center">
                        <p className="mt-4 pt-3 mb-2"><i className="far fa-envelope fa-4x text-muted"></i></p>
                        <div className="card-body">
                            <h3 className="card-title">Contact</h3>
                        </div>
                        <ul className="list-group list-group-flush text-left">
                            <li className="list-group-item"><i className="fas fa-envelope"></i> example@example.com</li>
                            <li className="list-group-item"><i className="fas fa-phone"></i> (xxx) xxx-xxxx</li>
                            <li className="list-group-item"><i className="fas fa-map-marker-alt"></i> XYZ street Ontario, CA
                            </li>
                        </ul>
                        <div className="card-body">
                            <Link to="#" className="card-link">Contact Us</Link>
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
export default Cards