import React from 'react'
import { Link } from 'react-router-dom';
class ResetPage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                        <img className="img-fluid" src="assets/img/black-logo.png" alt="Logo" width="180px" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-6 pass-reset mx-auto">

                        <h2 className="text-center mb-3">Reset Password</h2>
                        <form className="form-reset form needs-validation" id="reset-form" autoComplete="off" method="post" noValidate>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="password">Please enter your new password</label>
                                    <input id="password" name="password" placeholder="New Password"
                                        className="form-control form-control-lg border border-primary" type="password"
                                        aria-describedby="passwordHelp" minLength="5" required />
                                    <div id="password-error" className="invalid-feedback"></div>
                                    <small id="passwordHelp" className="form-text text-muted ft-indent"><i
                                            className="fas fa-angle-right"></i> Please enter a single upper case character.
                                    </small>
                                    <small id="passwordHelp" className="form-text text-muted ft-indent"><i
                                            className="fas fa-angle-right"></i> Please enter a single special character like !, @, #, %,
                                        ^, etc.
                                    </small>
                                    <small id="passwordHelp" className="form-text text-muted ft-indent"><i
                                            className="fas fa-angle-right"></i> Password must contain atleast 5 characters.
                                    </small>
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="c-password">Please enter your password again</label>
                                    <input id="c-password" name="c-password" placeholder="Confirm Password"
                                        className="form-control form-control-lg border border-primary" type="password" minLength="5"
                                        required />
                                    <div id="c-password-error" className="invalid-feedback"></div>
                                </div>
                            </div>
                            <input type="submit" value="Reset Password and Sign In" className="btn btn-lg btn-primary btn-block" />
                            <h5 className="text-center mt-3 mb-3"><Link to="#" className="text-primary plain-link">Cancel</Link></h5>
                        </form>
                    </div>
                </div>
                </main>
            </div>
        </div>
    )
  }
}
export default ResetPage