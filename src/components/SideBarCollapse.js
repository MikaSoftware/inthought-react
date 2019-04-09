import React from 'react'
import { Link, NavLink } from "react-router-dom";

class SideBarCollapse extends React.Component {
  render() {
    return (
    <div>
        <header className="navbar navbar-dark fixed-top bg-dark justify-content-between">
            <Link className="navbar-brand" to="#">Over55</Link>
            <button className="navbar-toggler" type="button" id="sidebarCollapse">
                <i className="fa fa-bars"></i>
            </button>
        </header>
        <nav id="sidebar">
            <p className="text-center text-light mt-3 mb-2">Hi, Rodolfo</p>
            <hr className="nav-divider" />
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/LoginPage">Login Page</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ResetPage">Reset Page</NavLink>
                </li>
                <li className="nav-item dropdown-btn">
                    <Link className="nav-link" to="#">Register Page <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/RegisterPage">Regisger Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/SuccessPage">Success Page</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/TopMenu">Top Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Widgets">Widgets</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/NotFound404">NotFound404</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ServerError500">ServerError500</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Icons">Icons</NavLink>
                </li>                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Buttons">Buttons</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Cards">Cards</NavLink>
                </li>
                <li className="nav-item dropdown-btn">
                    <Link className="nav-link" to="#">Tables <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Table1">Table 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Table2">Table 2</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown-btn">
                    <Link className="nav-link" to="#">Forms <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/FormElements">Form elements</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/FormValidations">Form validations</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ListPage">List Page</NavLink>
                </li>
                <li className="nav-item dropdown-btn">
                    <Link className="nav-link" to="#">Details Page <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/DetailsPage1">Details 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/DetailsPage2">Detail 2</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown-btn">
                    <Link className="nav-link" to="#">Pages <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/CommentsPage">Comments Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/SearchPage">Search Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Invoice">Invoice</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown-btn">
                    <Link className="nav-link" to="#">Wizards <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                    <ul>
                        <li className="nav-item dropdown-btn">
                            <Link className="nav-link" to="#">Steps <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                            <ul>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Step1">Step1</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Step2">Step2</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Step3">Step3</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Step4">Step4</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Step5">Step5</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Panel">Panel</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/GoogleMaps">Google Maps</NavLink>
                </li>
            </ul>
        </nav>
    </div>            
    )
  }
}
export default SideBarCollapse