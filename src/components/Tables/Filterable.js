import React from 'react'
import { Link} from "react-router-dom";



class Filterable extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            active: "active",
            usersData : [
                { id: '1,001', fname: 'Susan', lname: 'Fairley', phone: '(519)438-1111', email: 'susan@Inthoughtlondon.ca', status:"active"},
                { id: '1,002', fname: 'Rodolfo', lname: 'Martinez', phone: '(519)521-3135', email: 'rodolfo@Inthoughtlondon.ca', status:"active"},
                { id: '1,003', fname: 'So', lname: 'Yong', phone: '(519)428-2314', email: 'soyong@Inthoughtlondon.ca', status:"inactive" },
            ]
        }

        this.setActive = this.setActive.bind(this);
        this.setInActive = this.setInActive.bind(this);
    }

    setActive() {
        this.setState({
            active: true
        })
    }
    setInActive() {
        this.setState({
            active: false
        })
    }
    

  render() {

    let rows = this.state.usersData.map((person, i) => {
        return(
        ((this.state.active && person.status==="active") || (!this.state.active && person.status==='inactive')) &&
        <tr key={i}>
            <td><i className={`fa fa-1x ${ person.status === "active"? "fa-home" : "fa-briefcase"}` }></i></td>
            <td>{person.fname}</td>
            <td>{person.lname}</td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            <td className="text-primary">View 
                <span className="ml-auto">
                    <em className="fa fa-chevron-circle-right">
                    </em>
                </span>
            </td>
        </tr>
        )
      })

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Filterable Table</h1>
                    <div className="col-sm-12 mx-auto mt-4 pt-4">
                        <div className="row text-center placeholders">
                            <div className="col-sm-6 placeholder">
                                <div className="rounded-circle mx-auto mt-4 mb-4 circle-200 bg-pink text-center">
                                    <Link to="#" className="d-block link-ndecor" title="Add Client">
                                        <span className="r-circle"><i className="fas fa-plus fa-3x"></i></span>
                                    </Link>
                                </div>
                                <h4>Add</h4>
                                <span className="text-muted">Add a menber</span>
                            </div>

                            <div className="col-sm-6 placeholder">
                                <div className="rounded-circle mx-auto mt-4 mb-4 circle-200 bg-dgreen text-center">
                                    <Link to="#" className="d-block link-ndecor" title="Search Clients">
                                        <span className="r-circle"><i className="fas fa-search fa-3x"></i></span>
                                    </Link>
                                </div>
                                <h4>Search</h4>
                                <span className="text-muted">Search your members</span>
                            </div>
                        </div>
                        <div className="row text-center placeholders">
                            <div className="col-sm-6 placeholder text-left">
                                <h2><i className="fas fa-user-check"></i>Active Member Lists</h2>
                            </div>
                            <div className="col-sm-6 placeholder text-right">
                                <div className="buttons-group btn-group-toggle" data-toggle="buttons" >
                                        <button className={`btn btn-lg ${ this.state.active ? "btn-primary" : ""}` } onClick={this.setActive}>
                                            <i className="fas fa-user-check"></i>
                                            Active({this.state.usersData.reduce((total, item) => 
                                                 total + (item.status === "active" ? 1 : 0), 0)
                                            })
                                        </button>
                                        <button className={`btn btn-lg ${ this.state.active ? "":"btn-primary"}` } onClick={this.setInActive}>
                                            <i className="fas fa-user-times"></i>
                                            Inactive({this.state.usersData.reduce((total, item) => 
                                                 total + (item.status === "inactive" ? 1 : 0), 0)
                                            })
                                        </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th className="text-primary"></th>
                                        <th className="text-primary">First Name</th>
                                        <th className="text-primary">Last Name</th>
                                        <th className="text-primary">Phone</th>
                                        <th className="text-primary">E-Mail</th>
                                        <th className="text-primary"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {rows}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </main>
            </div>
        </div>
    )
  }
}
export default Filterable