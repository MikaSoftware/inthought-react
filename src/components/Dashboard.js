import React from 'react'
import { Link} from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main">
                    <h1>Dashboard</h1>
                    <section className="row text-center placeholders">
                        <div className="col-sm-3 placeholder">
                            <div className="rounded-circle mx-auto mt-4 mb-4 circle-200 bg-pink">
                                <Link to="#" className="d-block link-ndecor" title="Clients">
                                    <h1 className="circle-title">1,100</h1>
                                </Link>
                            </div>
                            <h4>Clients</h4>
                            <div className="text-muted">View your client list</div>
                        </div>
                        <div className="col-sm-3 placeholder">
                            <div className="rounded-circle mx-auto mt-4 mb-4 circle-200 bg-dgreen">
                                <Link to="#" className="d-block link-ndecor" title="Jobs">
                                    <h1 className="circle-title">10,000</h1>
                                </Link>
                            </div>
                            <h4>Jobs</h4>
                            <span className="text-muted">View your job history</span>
                        </div>
                        <div className="col-sm-3 placeholder">
                            <div className="rounded-circle mx-auto mt-4 mb-4 circle-200 bg-dblue">
                                <Link to="#" className="d-block link-ndecor" title="Members">
                                    <h1 className="circle-title">2,200</h1>
                                </Link>
                            </div>
                            <h4>Associate Members</h4>
                            <span className="text-muted">View Member Data</span>
                        </div>
                        <div className="col-sm-3 placeholder">
                            <div className="rounded-circle mx-auto mt-4 mb-4 circle-200 bg-orange">
                                <Link to="#" className="d-block link-ndecor" title="Tasks">
                                    <h1 className="circle-title">12</h1>
                                </Link>
                            </div>
                            <h4>Tasks</h4>
                            <span className="text-muted">View your tasks</span>
                        </div>
                    </section>

                    <div className="jumbotron">
                        <h1 className="display-4">Announcements</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                            attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger
                            container.</p>
                        <p className="lead">
                            <Link className="btn btn-primary btn-lg" to="#">Learn more</Link>
                        </p>
                    </div>

                </main>
            </div>
        </div>
    )
  }
}
export default Dashboard