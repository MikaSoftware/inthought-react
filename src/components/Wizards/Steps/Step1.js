import React from 'react'
import { Link } from "react-router-dom";

class Step1 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><span className="text-muted">You are here:</span> 
                            <Link to="#">Jobs</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Job</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-sm-3 p-3 mb-2">
                            <Link className="btn btn-primary btn-lg" to="#" role="button"><i className="fas fa-arrow-left"></i>
                                Back to Jobs Home</Link>
                        </div>
                    </div>
                    <h1 className="border-0">Add Job</h1>
                    <div className="row">
                        <div className="step-navigation">
                            <div id="step-1" className="st-grey active">
                                <span className="num">1.</span><span className="">Search Existing and Add</span>
                            </div>
                            <div id="step-2" className="st-grey">
                                <span className="num">2.</span><span className="">Job Type</span>
                            </div>
                            <div id="step-3" className="st-grey">
                                <span className="num">3.</span><span className="">Describe Job</span>
                            </div>
                            <div id="step-4" className="st-grey">
                                <span className="num">4.</span><span className="">Skills Required</span>
                            </div>
                            <div id="step-5" className="st-grey">
                                <span className="num">5.</span><span className="">Review</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto mt-2">
                        <h3 className="pt-4 pb-2 text-center">Add a new Residential Job</h3>
                        <form id="residential-job" method="get" className="needs-validation" action="" noValidate>
                            <p className="border-bottom mb-3 pb-1 text-secondary">Please enter at least one field.</p>
                            <div className="form-row">
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="firstname">First name</label>
                                    <input type="text" className="form-control form-control-lg border border-primary" id="firstname"
                                        name="firstname" placeholder="First name" minLength="3" />
                                    <div id="firstname-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="lastname">Last name</label>
                                    <input type="text" className="form-control form-control-lg border border-primary" id="lastname"
                                        name="lastname" placeholder="Last name" minLength="3" />
                                    <div id="lastname-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-7 mb-4">
                                    <label htmlFor="phonenumber">Phone</label>
                                    <input type="text" className="form-control form-control-lg border border-primary"
                                        id="phonenumber" name="phonenumber" placeholder="(xxx) xxx-xxxx" minLength="10"
                                        maxLength="14" />
                                    <div id="phonenumber-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="email">E-Mail</label>
                                    <input type="email" className="form-control form-control-lg border border-primary" id="email"
                                        name="email" placeholder="Email Address" />
                                    <div id="email-error" className="invalid-feedback"></div>
                                </div>
                            </div>
                            <div className="form-group col-md-12 mb-3 mx-auto text-center">
                                <button className="btn btn-success btn-lg btn-fxw mt-4"><i className="fas fa-search"></i>
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default Step1