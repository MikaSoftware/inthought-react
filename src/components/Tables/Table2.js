import React from 'react'
import { Link } from 'react-router-dom'
class Table2 extends React.Component {
  render() {
    return (
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
                        <td>susan@over55london.ca</td>
                    </tr>
                    <tr>
                        <td>1,002</td>
                        <td>Rodolfo</td>
                        <td>Martinez</td>
                        <td>(519)521-3135</td>
                        <td>rodolfo@over55london.ca</td>
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
        <Link id="return-to-top" to="#" className="btn-info btn-lg back-to-top" role="button" title="Back to top"><i
                className="fas fa-angle-up fa-2x"></i></Link>
    </main>
    )
  }
}
export default Table2