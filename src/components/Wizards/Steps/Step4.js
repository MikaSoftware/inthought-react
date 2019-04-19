import React from 'react'
import { Link } from "react-router-dom";

class Step4 extends React.Component {
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
                            <div id="step-2" className="st-grey completed">
                                <span className="num">2.</span><span className="">Job Type</span>
                            </div>
                            <div id="step-3" className="st-grey completed">
                                <span className="num">3.</span><span className="">Describe Job</span>
                            </div>
                            <div id="step-4" className="st-grey active">
                                <span className="num">4.</span><span className="">Skills Required</span>
                            </div>
                            <div id="step-5" className="st-grey">
                                <span className="num">5.</span><span className="">Review</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto mt-2">
                        <h3 className="pt-4 pb-2 text-center">Add Residential Job</h3>
                        <form id="residential-job-skill" method="post" className="needs-validation" action="" noValidate>
                            <div className="form-group my-3">
                                <label htmlFor="skills" className="font-b6">Please select required job skill(s):</label>
                                <input type="text" className="form-control form-control-lg border-primary" id="skills"
                                    placeholder="Add skill.." minLength="3" name="skills" data-role="tagsinput" required />
                                <small className="form-text text-muted">At least 1 skill must be entered.</small>
                                <div id="skills-error" className="invalid-feedback"></div>
                            </div>
                            <div className="form-group mb-3 mx-auto text-center p-0">
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
export default Step4