import React from 'react'

class SuccessPage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                            <img className="img-fluid" src="../assets/img/black-logo.png" alt="Logo" width="180px" />
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-sm-6 mx-auto">
                                <h2 className="form-signin-heading text-center mb-3">Welcome to the Inthought App!</h2>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default SuccessPage