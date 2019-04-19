import React from 'react'
import { Link } from "react-router-dom";

class Step2 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><span className="text-muted">You are here:</span> 
                            <Link to="index.html">Jobs</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Job</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-sm-3 p-3 mb-2">
                            <Link className="btn btn-primary btn-lg" to="index.html" role="button"><i className="fas fa-arrow-left"></i>
                                Back to Jobs Home</Link>
                        </div>
                    </div>
                    <h1>Add Job</h1>
                    <div className="row">
                        <div className="step-navigation">
                            <div id="step-1" className="st-grey completed">
                                <span className="num">1.</span><span className="">Search Existing and Add</span>
                            </div>
                            <div id="step-2" className="st-grey active">
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
                        <h3 className="pt-4 pb-2 text-center">Add Residential Job</h3>
                        <form id="residential-job" method="post" className="needs-validation" action="" noValidate>
                            <div className="form-group my-3 py-2">
                                <p className="mb-1 font-b6">Is this job one time or ongoing?</p>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="job-type" name="job-type" value="One-time"
                                        className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="job-type">One time</label>
                                </div>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="job-type2" name="job-type" value="Ongoing"
                                        className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="job-type2">Ongoing</label>
                                    <div id="job-type-error" className="invalid-feedback ml-2"></div>
                                </div>
                            </div>
                            <div className="form-group my-3 pt-2">
                                <p className="mb-1 font-b6">Is this job a home support service?</p>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="home-support" name="home-support" value="Yes"
                                        className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="home-support">Yes</label>
                                </div>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="home-support2" name="home-support" value="No"
                                        className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="home-support2">No</label>
                                    <div id="home-support-error" className="invalid-feedback ml-2"></div>
                                </div>
                            </div>
                            <div className="form-group col-md-12 mb-3 p-0 mx-auto text-center">
                                <button className="btn btn-success btn-lg mt-4 float-right pl-4 pr-4" type="submit">Next <i
                                        className="fas fa-arrow-right"></i></button>
                                <button className="btn btn-orange btn-lg mt-4 float-left pl-4 pr-4" type="button"><i
                                        className="fas fa-arrow-left"></i> Back
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
export default Step2