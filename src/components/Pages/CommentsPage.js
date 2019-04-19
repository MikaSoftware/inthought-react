import React from 'react'
import { Link } from 'react-router-dom'

class CommentsPage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="container">
                        <div className="row align-items-start">
                            <h1>Comments/Notes Screen</h1>
                            <div className="col-lg-12">
                                <div className="media mt-4">
                                    <img className="mr-3 img-head" src="../../html/img/placeholder.png" alt="" />
                                    <div className="media-body">
                                        <div className="row">
                                            <h5 className="mt-0 col-sm-10"><strong>Media heading</strong></h5>
                                            <h6 className="col-sm-2 text-secondary text-right">April 28, 2018 <br /> 3:53 a.m</h6>
                                        </div>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                            Fusce condimentum nunc ac nisi vulputate fringilla.</p>
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <img className="mr-3 img-head" src="../../html/img/placeholder.png" alt="" />
                                    <div className="media-body">
                                        <div className="row">
                                            <h5 className="mt-0 col-sm-10"><strong>Media heading</strong></h5>
                                            <h6 className="col-sm-2 text-secondary text-right">April 28, 2018 <br /> 3:53 a.m</h6>
                                        </div>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                            faucibus.</p>

                                        <div className="media mt-3">
                                            <Link className="pr-3" to="#">
                                                <img src="../../html/img/placeholder.png" alt="" className="img-head" />
                                            </Link>
                                            <div className="media-body">
                                                <div className="row">
                                                    <h5 className="mt-0 col-sm-10"><strong>Media heading</strong></h5>
                                                    <h6 className="col-sm-2 text-secondary text-right">April 28, 2018 <br /> 3:53 a.m
                                                    </h6>
                                                </div>
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                                    sollicitudin.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <img className="mr-3 img-head" src="../../html/img/placeholder.png" alt="" />
                                    <div className="media-body">
                                        <div className="row">
                                            <h5 className="mt-0 col-sm-10"><strong>Media heading</strong></h5>
                                            <h6 className="col-sm-2 text-secondary text-right">April 28, 2018 <br /> 3:53 a.m</h6>
                                        </div>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                            sollicitudin.</p>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Add Comment/Note: </label>
                                        <textarea className="form-control form-control-lg border border-primary"
                                                id="exampleFormControlTextarea1" placeholder="Write a note here..."
                                                rows="4"></textarea>
                                        <small id="emailHelp" className="form-text text-muted">Maximum 1,000 characters.</small>
                                    </div>
                                    <button type="submit" className="btn btn-lg float-right pl-4 pr-4 btn-primary">Add Note</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default CommentsPage