import React from 'react'
import { Link } from 'react-router-dom'
class ServerError500 extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6 mx-auto p-4">
                  <h3 className="text-center text-secondary mb-3">
                  <i className="fa fa-wrench fa-5x"></i>
                  </h3>
                  <h1 className="text-center display-2 text-secondary mb-3">500</h1>
                  <h2 className="text-center text-secondary mb-3">Server Error!</h2>
                  <p className="text-center text-secondary lead mb-4">
                  Unfortunately we are having trouble loading the page your are looking for. You can return to your 
                    <Link to="#">dashboard</Link>
                    . For immediate help, contact 
                    <Link to="#">support.</Link>
                  </p>
                  <br/>
                  <h4>
                    Phone: 
                    <Link to="#">(519)438-1111</Link>
                  </h4>
                  <h4>
                    E-Mail: 
                    <Link to="#">support@o55.ca</Link>
                  </h4>
                  <br/>
                  <br/>
                  <p className="text-center">
                  <Link className="btn btn-primary btn-lg" to="#">
                  Back to Dashboard
                  </Link>
                  </p>
              </div>
          </div>
      </div>
    )
  }
}
export default ServerError500