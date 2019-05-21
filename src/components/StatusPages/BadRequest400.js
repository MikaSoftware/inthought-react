import React from 'react'
import { Link} from "react-router-dom";
class BadRequest400 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="row">
                        <div className="col-sm-6 mx-auto p-4 error-page">
                            <h3 className="text-center text-secondary mb-3"><i className="far fa-times-circle fa-5x"></i></h3>
                            <h1 className="text-center display-2 text-secondary mb-3">400</h1>
                            <h2 className="text-center text-secondary mb-3">Bad Request Error</h2>
                            <p className="text-center text-secondary lead mb-4">The request could not be understood by the server due to malformed syntax.
                            The client should not repeat the request without modifications.</p>
                            <p className="text-center text-secondary lead mb-4">You can return to your 
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
export default BadRequest400