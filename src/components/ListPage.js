import React from 'react'
class ListPage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
            <h1>Clients List</h1>
            <div className="col-sm-12 mx-auto mt-4 pt-3 mb-4 pb-2">
                <div className="alert bg-danger text-white alert-dismissible fade show" role="alert">
                    Client named <strong>John</strong> can not be created.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="alert bg-warning alert-dismissible fade show" role="alert">
                    <strong>Duplicate client</strong> created. You sure!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="alert bg-primary text-white alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of recent clients below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="alert bg-success text-white alert-dismissible fade show" role="alert">
                    Client <strong>Successfully</strong> created.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="alert bg-dark text-white alert-dismissible fade show" role="alert">
                    <strong>Normal message!</strong> this is normal message notification.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="alert bg-secondary text-white alert-dismissible fade show" role="alert">
                    <strong>Hello!</strong> you should check our clients below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
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
export default ListPage