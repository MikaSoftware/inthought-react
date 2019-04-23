import React from 'react'
import { Link} from "react-router-dom";
class NotFound404 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="row">
                        <div className="col-sm-6 mx-auto p-4 error-page-pane">
                            <div>
                                <h3 className="text-center text-secondary mb-3"><i className="far fa-frown fa-5x"></i></h3>
                                <h1 className="text-center display-2 text-secondary mb-3">404</h1>
                                <h2 className="text-center text-secondary mb-3">Page Not Found</h2>
                            </div>
                            
                            
                        </div>
                        <div className="col-sm-6 mx-auto p-4 error-page-pane">
                            <div>
                                <h4>Phone: <Link to="#">(519)438-1111</Link></h4>

                                <h4>E-Mail: <Link to="#">support@o55.ca</Link></h4>
                                    <br/>
                                <p className="text-center">
                                    <Link className="btn btn-primary btn-lg" to="#" role="button">
                                    Back to Dashboard
                                    </Link>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default NotFound404