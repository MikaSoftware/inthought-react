import React from 'react'
import { Link } from "react-router-dom";

class Widgets extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                <h1 className="border-0">Widgets</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-right text-muted">
                                        <em className="fa fa-gamepad fa-2x">
                                        </em>
                                    </div>
                                    <h3 className="mt-0">99.999</h3>
                                    <p className="text-muted">Games played last month</p>
                                    <div className="progress progress-xs mb-3">
                                        <div className="progress-bar progress-bar-striped bg-warning" 
                                            role="progressbar" 
                                            aria-valuenow="60" 
                                            aria-valuemin="0" 
                                            aria-valuemax="70" 
                                            style={{width: "60%" }}>
                                            <span className="sr-only">60% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-right text-muted">
                                        <em className="fa fa-coffee fa-2x">
                                        </em>
                                    </div>
                                    <h3 className="mt-0">300</h3>
                                    <p className="text-muted">Coffee cups per day</p>
                                    <div className="progress progress-xs mb-3">
                                        <div className="progress-bar progress-bar-striped bg-green" 
                                            role="progressbar" 
                                            aria-valuenow="80" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                            style={{width: "80%"}}>
                                            <span className="sr-only">80% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-right text-muted">
                                        <em className="fa fa-upload fa-2x">
                                        </em>
                                    </div>
                                    <h3 className="mt-0">1000 Gb</h3>
                                    <p className="text-muted">Average Monthly Uploads</p>
                                    <div className="progress progress-xs mb-3">
                                        <div className="progress-bar progress-bar-striped bg-info" 
                                            role="progressbar" 
                                            aria-valuenow="40" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: "40%"}}>
                                            <span className="sr-only">40% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="d-flex">
                                    <div className="w-50 bb br px-3">
                                        <div className="d-flex align-items-center">
                                            <em className="fa fa-users fa-2x text-info">
                                            </em>
                                            <div className="ml-auto">
                                                <div className="card-body text-right">
                                                    <h5 className="mt-0">10k</h5>
                                                    <p className="mb-0 text-muted">VISITORS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-50 bb px-3">
                                        <div className="d-flex align-items-center">
                                            <em className="fa fa-music fa-2x text-danger">
                                            </em>
                                            <div className="ml-auto">
                                                <div className="card-body text-right">
                                                <h5 className="mt-0">100%</h5>
                                                <p className="mb-0 text-muted">VOLUME</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w-50 br px-3">
                                        <div className="d-flex align-items-center">
                                            <em className="fas fa-code-branch fa-2x text-inverse">
                                            </em>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h5 className="mt-0">150</h5>
                                                <p className="mb-0 text-muted">FORKS</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-50 px-3">
                                        <div className="d-flex align-items-center">
                                            <em className="fa fa-inbox fa-2x text-success">
                                            </em>
                                            <div className="ml-auto">
                                                <div className="card-body text-right">
                                                    <h5 className="mt-0">10</h5>
                                                    <p className="mb-0 text-muted">MESSAGES</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card rect-corner">
                                <div className="half-float ie-fix-flex">
                                    <img className="img-fluid" src="assets/img/background-01.jpg" alt="Demo" />
                                    <div className="half-float-bottom">
                                        <img className="img-thumbnail circle thumb128" src="assets/img/portrait-01.jpg" alt="Demo" />
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="m-0">Ted Berry</h3>
                                    <p className="text-muted">Lead director</p>
                                    <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
                                </div>
                                <div className="card-body text-center bg-gray-dark">
                                    <div className="row">
                                        <div className="col-4">
                                            <h3 className="m-0">400</h3>
                                            <p className="m-0">Photos</p>
                                        </div>
                                        <div className="col-4">
                                            <h3 className="m-0">2000</h3>
                                            <p className="m-0">Likes</p>
                                        </div>
                                        <div className="col-4">
                                            <h3 className="m-0">500</h3>
                                            <p className="m-0">Following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card rect-corner">
                                <div className="card-body text-center bg-center" 
                                    style={{backgroundImage: `url(assets/img/background-01.jpg)`}}>
                                    <div className="row">
                                        <div className="col-12 text-white">
                                        <img className="img-thumbnail circle thumb128" src="assets/img/portrait-01.jpg" alt="Demo" />
                                        <h3 className="m-0">Chris</h3>
                                        <p className="m-0">
                                        <em className="fab fa-twitter fa-fw">
                                        </em>@chris</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-center bg-gray-darker">
                                    <div className="row">
                                        <div className="col-4">
                                            <Link className="text-white" to="#">
                                                <em className="fab fa-twitter fa-2x">
                                                </em>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="text-white" to="">
                                                <em className="fab fa-facebook-f fa-2x">
                                                </em>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link className="text-white" to="">
                                                <em className="fa fa-comments fa-2x">
                                                </em>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <Link className="list-group-item" to="">
                                        <span className="badge badge-primary float-right">15</span>
                                        <em className="fa-fw far fa-clock text-muted">
                                        </em>Recent Activity</Link>
                                    <Link className="list-group-item" to="">
                                        <span className="badge badge-primary float-right">100</span>
                                        <em className="fa-fw fa fa-user text-muted">
                                        </em>Following</Link>
                                    <Link className="list-group-item" to="">
                                        <span className="badge badge-primary float-right">300</span>
                                        <em className="fa-fw far fa-folder-open text-muted">
                                        </em>Photos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="card bg-success-dark border-0">
                                <div className="row align-items-center mx-0">
                                    <div className="col-4 text-center">
                                        <em className="fas fa-share-alt fa-3x">
                                        </em>
                                    </div>
                                    <div className="col-8 py-4 bg-success rounded-right">
                                        <div className="h1 m-0 text-bold">150</div>
                                        <div className="text-uppercase">New connections</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card bg-danger-dark border-0">
                                <div className="row align-items-center mx-0">
                                    <div className="col-4 text-center">
                                        <em className="far fa-star fa-3x">
                                        </em>
                                    </div>
                                    <div className="col-8 py-4 bg-danger rounded-right">
                                        <div className="h1 m-0 text-bold">7000</div>
                                        <div className="text-uppercase">Ratings received</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card bg-warning-dark border-0">
                                <div className="row align-items-center mx-0">
                                    <div className="col-4 text-center">
                                        <em className="fas fa-trophy fa-3x">
                                        </em>
                                    </div>
                                    <div className="col-8 py-4 bg-warning rounded-right">
                                        <div className="h1 m-0 text-bold">10</div>
                                        <div className="text-uppercase">Achievements</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="row row-flush">
                                    <div className="col-4 bg-info text-center d-flex align-items-center justify-content-center rounded-left">
                                        <em className="fa fa-users fa-2x">
                                        </em>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body text-center">
                                            <h4 className="mt-0">10k</h4>
                                            <p className="mb-0 text-muted">VISITORS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="row row-flush">
                                    <div className="col-4 bg-danger text-center d-flex align-items-center justify-content-center rounded-left">
                                        <em className="fa fa-music fa-2x">
                                        </em>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body text-center">
                                            <h4 className="mt-0">100%</h4>
                                            <p className="mb-0 text-muted">VOLUME</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="row row-flush">
                                    <div className="col-4 bg-inverse text-center d-flex align-items-center justify-content-center rounded-left">
                                        <em className="fas fa-code-branch fa-2x">
                                        </em>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body text-center">
                                            <h4 className="mt-0">150</h4>
                                            <p className="mb-0 text-muted">FORKS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="row row-flush">
                                    <div className="col-4 bg-green text-center d-flex align-items-center justify-content-center rounded-left">
                                        <em className="fa fa-inbox fa-2x">
                                        </em>
                                    </div>
                                <div className="col-8">
                                    <div className="card-body text-center">
                                        <h4 className="mt-0">10</h4>
                                        <p className="mb-0 text-muted">NEW MESSAGES</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <img className="img-fluid ie-fix-flex" src="assets/img/background-01.jpg" alt="Demo" />
                                <div className="card-body">
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <p>Comments</p>
                                            <h3 className="m-0 text-primary">700</h3>
                                        </div>
                                        <div className="col-4">
                                            <p>Likes</p>
                                            <h3 className="m-0 text-primary">1500</h3>
                                        </div>
                                        <div className="col-4">
                                            <p>Shots</p>
                                            <h3 className="m-0 text-primary">300</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <img className="circle thumb96" src="assets/img/portrait-01.jpg" alt="Demo" />
                                        </div>
                                        <div className="col-6">
                                            <h5 className="mt-0">Peggy Peters</h5>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mb-1">
                                                    <em className="fas fa-map-marker-alt fa-fw">
                                                    </em>ASD, Qwerty</li>
                                                <li className="mb-1">
                                                    <em className="fab fa-twitter fa-fw">
                                                    </em>@asdasd</li>
                                                <li className="mb-1">
                                                    <em className="fa fa-envelope fa-fw">
                                                    </em>asdasd@mail.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body bg-inverse">
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <p className="m-0 h3">700</p>
                                            <p className="m-0 text-muted">Followers</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="m-0 h3">1500</p>
                                            <p className="m-0 text-muted">Following</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="m-0 h3">510</p>
                                            <p className="m-0 text-muted">Loved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-5 text-center">
                                            <img className="img-thumbnail circle img-fluid thumb96" src="assets/img/portrait-01.jpg" alt="Demo" />
                                        </div>
                                        <div className="col-7">
                                            <div className="text-right">
                                                <Link className="btn btn-success btn-sm" to="">Follow</Link>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="text-left">
                                                        <h4 className="mt-0">Sarah Pierce</h4>
                                                        <p className="text-muted">150 Following / 100 Followers</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-info">
                                        <div className="card-body text-center">
                                            <div className="text-lg m-0">300</div>
                                            <p>Re-Tweets</p>
                                            <div className="mb-3">
                                            </div>
                                            <em className="fab fa-twitter text-alpha">
                                            </em>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-primary">
                                        <div className="card-body text-center">
                                            <div className="text-lg m-0">12°</div>
                                            <p>Bariloche</p>
                                            <div className="mb-3">
                                            </div>
                                            <em className="far fa-sun">
                                            </em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-danger">
                                        <div className="card-body text-center">
                                            <div className="radial-bar radial-bar-40 radial-bar radial-bar-danger m-0">
                                                <img src="assets/img/portrait-01.jpg" alt="Demo" />
                                            </div>
                                            <p>
                                                <strong>40%</strong>
                                                <span>complete</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-purple">
                                        <div className="card-body text-center">
                                            <p className="mb-3">
                                                <img className="rounded thumb64" src="assets/img/portrait-01.jpg" alt="Demo" />
                                            </p>
                                            <p className="m-0">
                                                <strong>Mika</strong>
                                                <span>is now following you</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="text-center">
                                            <img className="img-thumbnail circle img-fluid thumb64" src="assets/img/portrait-01.jpg" alt="Demo" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="m-0">Sylvia Morris</h4>
                                        </div>
                                        <div className="ml-auto align-self-start">
                                            <Link className="btn btn-info btn-sm" to="">Follow</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                    <div className="row">
                        <div className="col-xl-3 col-lg-6">
                            <div className="card bg-primary border-0">
                                <div className="card-header" >
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <em className="fa fa-comments fa-3x">
                                            </em>
                                        </div>
                                        <div className="col-9 text-right">
                                            <div className="text-lg">26</div>
                                            <p className="m-0">New Comments!</p>
                                        </div>
                                    </div>
                                </div>
                                <Link className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" to="">
                                    <span>View Details</span>
                                    <span className="ml-auto">
                                        <em className="fa fa-chevron-circle-right">
                                        </em>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card bg-green border-0">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <em className="fa fa-tasks fa-3x">
                                            </em>
                                        </div>
                                        <div className="col-9 text-right">
                                            <div className="text-lg">12</div>
                                            <p className="m-0">New Tasks!</p>
                                        </div>
                                    </div>
                                </div>
                                <Link className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" to="">
                                    <span>View Details</span>
                                    <span className="ml-auto">
                                        <em className="fa fa-chevron-circle-right">
                                        </em>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card bg-warning border-0">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <em className="fa fa-shopping-cart fa-3x">
                                            </em>
                                        </div>
                                        <div className="col-9 text-right">
                                            <div className="text-lg">124</div>
                                            <p className="m-0">New Orders!</p>
                                        </div>
                                    </div>
                                </div>
                                <Link className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" to="">
                                    <span>View Details</span>
                                    <span className="ml-auto">
                                        <em className="fa fa-chevron-circle-right">
                                        </em>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card bg-danger border-0">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <em className="far fa-life-ring fa-3x">
                                            </em>
                                        </div>
                                        <div className="col-9 text-right">
                                            <div className="text-lg">13</div>
                                            <p className="m-0">Support Tickets!</p>
                                        </div>
                                    </div>
                                </div>
                                <Link className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" to="">
                                    <span>View Details</span>
                                    <span className="ml-auto">
                                        <em className="fa fa-chevron-circle-right">
                                        </em>
                                    </span>
                                </Link>
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
export default Widgets