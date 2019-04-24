import React from 'react'
import { Link} from "react-router-dom";
class NotFound404 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="row">
                        <div className="col-sm-6 mx-auto p-4 error-page">
                            <h3 className="text-center text-secondary mb-3"><i className="far fa-frown fa-5x"></i></h3>
                            <h1 className="text-center display-2 text-secondary mb-3">404</h1>
                            <h2 className="text-center text-secondary mb-3">Page Not Found</h2>
                            <p className="text-center text-secondary lead mb-4">Unfortunately we are having trouble loading the page your
                                are looking for. You can return to your 
                                <Link to="#">dashboard</Link>
                                . For immediate help, contact 
                                <Link to="#">&nbsp;support.</Link></p>
                            <h4>Phone: <Link to="#">(519)438-1111</Link></h4>
                            <h4>E-Mail: <Link to="#">support@o55.ca</Link></h4>
                            <br/>
                            <p className="text-center submit">
                            <Link className="btn btn-primary btn-lg" to="#" role="button">
                            Back to Dashboard
                            </Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default NotFound404