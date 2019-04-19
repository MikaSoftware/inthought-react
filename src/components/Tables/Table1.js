import React from 'react'
class Table1 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Table 1</h1>
                    <div className="row mt-4 pt-3 mb-4 pb-2">
                        <div className="col-md-10 mx-auto p-2">
                            <p><strong>Please confirm these details before adding the residential client:</strong></p>
                            <table className="table table-bordered custom-cell-w">
                                <tbody>
                                <tr className="bg-dark">
                                    <th scope="row" colSpan="2" className="text-light">Personal details</th>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">First name</th>
                                    <td>Rodolfo</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Last name</th>
                                    <td>Martinez</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Phone</th>
                                    <td>(xxx) xxx-xxxx</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Mobile</th>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">E-Mail</th>
                                    <td>example@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Ok to E-Mail?</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Ok to Text?</th>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Date of Birth</th>
                                    <td>30/03/1994</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Gender</th>
                                    <td>Male</td>
                                </tr>
                                <tr className="bg-dark">
                                    <th scope="row" colSpan="2" className="text-light">Address</th>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Street No.</th>
                                    <td>XYZ</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Street name</th>
                                    <td>Southdale road</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Neighbourhood</th>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">City</th>
                                    <td>London</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">State/Province</th>
                                    <td>Ontario</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Postal code</th>
                                    <td>N0L 1E0</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Country</th>
                                    <td>Canada</td>
                                </tr>
                                <tr className="bg-dark">
                                    <th scope="row" colSpan="2" className="text-light">Skills</th>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-light">Client&apos;s skills</th>
                                    <td><span className="badge badge-info badge-lg">Skill 1</span> <span
                                            className="badge badge-info badge-lg">Skill 2</span>
                                        <span className="badge badge-info badge-lg">HTML</span> <span
                                                className="badge badge-info badge-lg">PHP</span> <span
                                                className="badge badge-info badge-lg">Bootstrap</span> <span
                                                className="badge badge-info badge-lg">Django</span> <span
                                                className="badge badge-info badge-lg">Photoshop</span> <span
                                                className="badge badge-info badge-lg">Python</span> <span
                                                className="badge badge-info badge-lg">ASP.net</span> <span
                                                className="badge badge-info badge-lg">Android</span> <span
                                                className="badge badge-info badge-lg">jQuery</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default Table1