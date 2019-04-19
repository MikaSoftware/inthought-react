import React from 'react'
import { Link } from 'react-router-dom'
class DetailsPage1 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Profile</h1>
                    <div className="row mt-4 pt-3 mb-4 pb-2">
                        <div className="col-md-10 mx-auto rounded bg-light border p-2">
                            <div className="row">
                                <div className="col-sm-5">
                                    <img src="./assets/img/Lucha-Comics.png" className="img-fluid rounded" alt="Profile" />
                                </div>
                                <div className="col-sm-7 px-4 py-3">
                                    <h3>Rodolfo Martinez</h3>
                                    <p className="text-muted">San Francisco, USA <i className="fas fa-map-marker-alt"></i></p>
                                    <p><i className="fas fa-envelope"></i> email@example.com</p>
                                    <p><i className="fas fa-phone-square"></i> (xxx) xxx-xxxx</p>
                                    <p className="m-0"><strong>Skills:</strong></p>
                                    <p>
                                        <Link to="#" className="badge badge-info">Skill 1</Link> 
                                        <Link to="#" className="badge badge-info">Skill 2</Link>
                                        <Link to="#" className="badge badge-info">Skill 3</Link> 
                                        <Link to="#" className="badge badge-dark">Skill 4</Link>
                                        <Link to="#" className="badge badge-success">Html</Link> 
                                        <Link to="#" className="badge badge-primary">Developer</Link>
                                        <Link to="#" className="badge badge-warning">Bootstrap</Link>
                                    </p>
                                    <div className="col-sm-12 p-0">
                                        <p className="m-0"><strong>Ratings:</strong></p>
                                        <div className="star-rating" data-rating="4.5">
                                            <span className="far fa-star" data-rating="1"></span>
                                            <span className="far fa-star" data-rating="2"></span>
                                            <span className="far fa-star" data-rating="3"></span>
                                            <span className="far fa-star" data-rating="4"></span>
                                            <span className="far fa-star" data-rating="5"></span>
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
export default DetailsPage1