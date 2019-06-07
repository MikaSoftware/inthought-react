import React from 'react'
class Table2 extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Table 2</h1>
                    <div className="col-sm-12 mx-auto mt-4 pt-4">
                        <h2>Recent Clients</h2>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone</th>
                                    <th>E-Mail</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1,001</td>
                                    <td>Susan</td>
                                    <td>Fairley</td>
                                    <td>(519)438-1111</td>
                                    <td>susan@Inthoughtlondon.ca</td>
                                </tr>
                                <tr>
                                    <td>1,002</td>
                                    <td>Rodolfo</td>
                                    <td>Martinez</td>
                                    <td>(519)521-3135</td>
                                    <td>rodolfo@Inthoughtlondon.ca</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>
                                    <td>Integer</td>
                                    <td>nec</td>
                                    <td>odio</td>
                                    <td>Praesent</td>
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
export default Table2