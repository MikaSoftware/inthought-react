import React from 'react'

class RegisterPage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Register page</h1>
                    <div className="col-md-5 mx-auto mt-2">
                        <h3 className="pt-4 pb-2 text-center">Register</h3>
                        <form id="residential-form" method="post" className="needs-validation" action="" noValidate>
                            <p className="border-bottom mb-3 pb-1 text-secondary">Personal Details</p>
                            <div id="all-errors" className="alert alert-error fade show" role="alert">
                                <strong>There were errors during registration:</strong>
                                <div id="firstname-error" className="form-error"></div>
                                <div id="lastname-error" className="form-error"></div>
                                <div id="phonenumber-error" className="form-error"></div>
                                <div id="mobilenumber-error" className="form-error"></div>
                                <div id="email-error" className="form-error"></div>
                                <div id="ok-email-error" className="form-error"></div>
                                <div id="ok-text-error" className="form-error"></div>
                                <div id="dob-error" className="form-error"></div>
                                <div id="gender-error" className="form-error"></div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="firstname">First name</label>
                                    <input type="text" className="form-control form-control-lg border border-primary" id="firstname"
                                            name="firstname" placeholder="First name" minLength="3" required />
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="lastname">Last name</label>
                                    <input type="text" className="form-control form-control-lg border border-primary" id="lastname"
                                            name="lastname" placeholder="Last name" minLength="3" required />
                                </div>
                                <div className="form-group col-md-6 mb-4">
                                    <label htmlFor="phonenumber">Phone</label>
                                    <input type="text" className="form-control form-control-lg border border-primary"
                                            id="phonenumber" name="phonenumber" placeholder="(xxx) xxx-xxxx" minLength="10"
                                            maxLength="14" required />
                                </div>
                                <div className="form-group col-md-6 mb-4">
                                    <label htmlFor="mobilenumber">Mobile (optional)</label>
                                    <input type="text" className="form-control form-control-lg border border-success"
                                            id="mobilenumber" name="mobilenumber" placeholder="(xxx) xxx-xxxx" minLength="10"
                                            maxLength="14" />
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="email">E-Mail (optional)</label>
                                    <input type="email" className="form-control form-control-lg border border-success" id="email"
                                            name="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="form-group mt-2 mb-4">
                                <p className="mb-1">Ok to E-Mail?</p>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ok-email" name="ok-email" value="Yes"
                                            className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="ok-email">Yes</label>
                                </div>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ok-email2" name="ok-email" value="No"
                                            className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="ok-email2">No</label>
                                </div>
                            </div>
                            <div className="form-group mt-2 mb-4">
                                <p className="mb-1">Ok to Text?</p>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ok-text" name="ok-text" value="Yes"
                                            className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="ok-text">Yes</label>
                                </div>
                                <div className="form-radio custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ok-text2" name="ok-text" value="No"
                                            className="custom-control-input form-check-input" required />
                                    <label className="custom-control-label form-check-label" htmlFor="ok-text2">No</label>
                                </div>
                            </div>
                            <div className="form-group p-0 col-md-7 mb-4">
                                <label htmlFor="dob">Date of Birth</label>
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control form-control-lg border border-primary" id="dob"
                                            name="dob" placeholder="mm/dd/yyyy" required />
                                    <div className="input-group-append">
                                        <span className="input-group-text dob-icon bg-primary border-primary"><i
                                                className="far fa-calendar-alt"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-7 mb-4 p-0">
                                <label htmlFor="gender">Gender</label>
                                <select className="custom-select form-control-lg border-primary" id="gender" name="gender" required>
                                    <option value="">Gender...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <p className="border-bottom mb-3 pb-1 text-secondary">Address 1</p>
                            <div className="form-row">
                                <div className="form-group col-md-4 mb-4">
                                    <label htmlFor="street_no">Street No.</label>
                                    <input type="text" className="form-control form-control-lg border border-primary"
                                            id="street_no" name="street_no" placeholder="Street no." required />
                                    <div id="street-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-8 mb-4">
                                    <label htmlFor="streetname">Street name</label>
                                    <input type="text" className="form-control form-control-lg border border-primary"
                                            id="streetname" name="streetname" placeholder="Street name" minLength="3"
                                            required />
                                    <div id="streetname-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="neighbourhood">Neighbourhood (optional)</label>
                                    <input type="text" className="form-control form-control-lg border border-primary"
                                            id="neighbourhood" name="neighbourhood" placeholder="Neighbourhood"
                                            minLength="3" />
                                    <div id="neighbourhood-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-5 mb-4">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control form-control-lg border border-primary" id="city"
                                            name="city" placeholder="City" minLength="3" required />
                                    <div id="city-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-7 mb-4">
                                    <label htmlFor="province">State/Province</label>
                                    <select className="custom-select form-control-lg border-primary" id="province"
                                            name="province" required>
                                    </select>
                                    <div id="province-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-5 mb-4">
                                    <label htmlFor="postal-code">Postal Code</label>
                                    <input type="text" className="form-control form-control-lg border border-primary"
                                            id="postal-code" name="postal-code" placeholder="Postal Code" minLength="3"
                                            required />
                                    <div id="postal-code-error" className="invalid-feedback"></div>
                                </div>
                                <div className="form-group col-md-7 mb-4">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select form-control-lg border-primary" id="country" name="country"
                                            required>
                                    </select>
                                    <div id="country-error" className="invalid-feedback"></div>
                                </div>
                            </div>
                            <div className="custom-control custom-checkbox mb-3 mt-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                            <div className="form-group col-md-12 mb-3 mx-auto text-center">
                                <button className="btn btn-success btn-lg btn-fxw mt-4" type="submit">
                                <i className="fas fa-plus"></i>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default RegisterPage