import React from 'react'
class Step5 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Confirmation</h1>
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
                            <div id="step-4" className="st-grey completed">
                                <span className="num">4.</span><span className="">Skills Required</span>
                            </div>
                            <div id="step-5" className="st-grey active">
                                <span className="num">5.</span><span className="">Review</span>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-10 mx-auto mb-4 py-2">
                            <h3 className="py-2 text-center mb-4">Residential Job Summary Details</h3>
                            <table className="table table-bordered custom-cell-w">
                                <tbody>
                                <tr className="bg-dark">
                                    <th scope="row" colSpan="2" className="text-light">Summary Details</th>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Client Name</th>
                                    <td>Rodolfo Martinez</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Job Type</th>
                                    <td>One-Time</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Home Support?</th>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Description</th>
                                    <td>
                                        We need to add:
                                        <ul>
                                            <li>New shower in bathroom.</li>
                                            <li>New kitchen tiles.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Skill(s) Required</th>
                                    <td><span className="badge badge-info badge-lg">Plumbing</span> <span
                                            className="badge badge-info badge-lg">Skill 1</span>
                                        <span className="badge badge-info badge-lg">Skill 2</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="form-group col-md-12 mb-3 p-0 mx-auto text-center">
                                <button className="btn btn-success btn-lg mt-4 float-right pl-4 pr-4" type="submit"
                                        data-toggle="modal" data-target="#yesModal"><i className="fas fa-plus"></i> Add Job
                                </button>
                                <button className="btn btn-orange btn-lg mt-4 float-left pl-4 pr-4" type="button"><i
                                        className="fas fa-arrow-left"></i> Back
                                </button>
                            </div>
                        </div>

                        <div className="modal fade" id="yesModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <p className="m-3 p-2">This will create a new job, which will need to be assigned to a
                                            member. Do you want to continue?</p>
                                        <button type="button" className="btn btn-lg btn-secondary float-left m-2"
                                                data-dismiss="modal">No
                                        </button>
                                        <button type="button" className="btn btn-lg btn-primary float-right m-2" id="yes_submit">
                                            Yes
                                        </button>
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
export default Step5