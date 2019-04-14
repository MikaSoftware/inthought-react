import React from 'react'
import { Link } from 'react-router-dom'

class Buttons extends React.Component {
  render() {
    return (
    <div className="container-fluid">
        <div className="d-flex align-items-stretch">
            <main id="main" role="main">
                <h1>Buttons</h1>
                <div>
                <div className="buttons-card">
                    <h3>Large buttons</h3>
                    <div className="buttons-group">
                        <input type="button" value="Primary" className="btn btn-lg btn-primary" />
                        <input type="button" value="Secondary" className="btn btn-lg btn-secondary " />
                        <input type="button" value="Success" className="btn btn-lg btn-success " />
                        <input type="button" value="Info" className="btn btn-lg btn-info " />
                        <input type="button" value="Warning" className="btn btn-lg btn-warning " />
                        <input type="button" value="Danger" className="btn btn-lg btn-danger " />
                        <input type="button" value="Inverse" className="btn btn-lg btn-inverse " />
                        <input type="button" value="Dark" className="btn btn-lg btn-dark " />
                    </div>
                </div>
                <div className="buttons-card">
                    <h4>Middle buttons</h4>
                    <div className="buttons-group">
                        <input type="button" value="Primary" className="btn btn-md btn-primary" />
                        <input type="button" value="Secondary" className="btn btn-md btn-secondary " />
                        <input type="button" value="Success" className="btn btn-md btn-success " />
                        <input type="button" value="Info" className="btn btn-md btn-info " />
                        <input type="button" value="Warning" className="btn btn-md btn-warning " />
                        <input type="button" value="Danger" className="btn btn-md btn-danger " />
                        <input type="button" value="Inverse" className="btn btn-md btn-inverse " />
                        <input type="button" value="Dark" className="btn btn-md btn-dark " />
                    </div>
                </div>
                <div className="buttons-card">
                    <h5>Small buttons</h5>
                    <div className="buttons-group">
                        <input type="button" value="Primary" className="btn btn-sm btn-primary" />
                        <input type="button" value="Secondary" className="btn btn-sm btn-secondary " />
                        <input type="button" value="Success" className="btn btn-sm btn-success " />
                        <input type="button" value="Info" className="btn btn-sm btn-info " />
                        <input type="button" value="Warning" className="btn btn-sm btn-warning " />
                        <input type="button" value="Danger" className="btn btn-sm btn-danger " />
                        <input type="button" value="Inverse" className="btn btn-sm btn-inverse " />
                        <input type="button" value="Dark" className="btn btn-sm btn-dark " />
                    </div>
                </div>
                <div className="buttons-card">
                    <h3>Button Labeled</h3>
                    <div className="buttons-group">
                        <div>
                            <Link className="btn btn-primary btn-lg" to="#" role="button">
                                <i className="fas fa-arrow-left"></i>
                                Back to Clients Home
                            </Link>
                            <Link className="btn btn-danger btn-lg" to="#" role="button">
                                <i className="fas fa-plus"></i>
                                Add New
                            </Link>
                            <Link to="#" className="btn btn-success btn-lg" type="button">
                                View 
                                <i className="fas fa-arrow-circle-right"></i>
                            </Link>
                        </div>
                        <div>
                            <button className="btn btn-success btn-lg" type="submit">
                                <i className="fas fa-plus"></i>
                                Add Client
                            </button>
                            <button className="btn btn-danger btn-lg" type="submit">
                                <i className="fas fa-search"></i>
                                Search
                            </button>
                            <button className="btn btn-orange btn-lg" type="button">
                                <i className="fas fa-arrow-left"></i>
                                Back
                            </button>
                            <button className="btn btn-dark btn-lg" type="submit">
                                Next
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        
                    </div>                
                </div>
                <div className="buttons-card">
                    <h3>Group Buttons</h3>
                    <div>
                        <div className="btn-group">
                            <button type="button" className="fc-prev-button btn btn-primary" aria-label="prev">
                                <span className="fa fa-chevron-left"></span>
                            </button>
                            <button type="button" className="fc-next-button btn btn-primary" aria-label="next">
                                <span className="fa fa-chevron-right"></span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="btn-group">
                            <button type="button" className="fc-month-button btn btn-primary active">month</button>
                            <button type="button" className="fc-agendaWeek-button btn btn-primary ">week</button>
                            <button type="button" className="fc-agendaDay-button btn btn-primary ">day</button>
                            <button type="button" className="fc-listMonth-button btn btn-primary ">list</button>
                        </div>
                    </div>
                </div>
                <div className="buttons-card">
                    <h3>Round buttons</h3>
                    <section className="row text-center placeholders">
                        <div className="rounded-circle circle-200 bg-pink text-center">
                            <Link to="#" className="d-block link-ndecor" title="Add Client">
                                <span className="r-circle"><i className="fas fa-plus fa-3x"></i></span>
                            </Link>
                        </div>
                        <div className="rounded-circle circle-150 bg-dgreen text-center">
                            <Link to="#" className="d-block link-ndecor" title="Search Clients">
                                <span className="r-circle"><i className="fas fa-search fa-2x"></i></span>
                            </Link>
                        </div>
                        <div className="rounded-circle circle-100 bg-dblue text-center">
                            <Link to="#" className="d-block link-ndecor" title="View Clients">
                                <span className="r-circle"><i className="fas fa-list-alt fa-1x"></i></span>
                            </Link>
                        </div>
                    </section>
                    <section className="row text-center placeholders">
                        <div className="rounded-circle circle-200 bg-pink text-center">
                            <Link to="#" className="d-block link-ndecor" title="Clients">
                                <span className="circle-title">1,100</span>
                            </Link>
                        </div>
                        <div className="rounded-circle circle-150 bg-dgreen text-center">
                            <Link to="#" className="d-block link-ndecor" title="Jobs">
                                <span className="circle-title">10,000</span>
                            </Link>
                        </div>
                        <div className="rounded-circle circle-100 bg-dblue text-center">
                            <Link to="#" className="d-block link-ndecor" title="Members">
                                <span className="circle-title">2,200</span>
                            </Link>
                        </div>
                        <div className="rounded-circle circle-50 bg-orange text-center">
                            <Link to="#" className="d-block link-ndecor" title="Tasks">
                                <span className="circle-title">12</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            </main>
        </div>
    </div>
    )
  }
}
export default Buttons