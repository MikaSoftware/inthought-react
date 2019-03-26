import React from 'react'
import { Link, NavLink } from "react-router-dom";

class SideBarCollapse extends React.Component {
  render() {
    return (
    <div>
        <header className="navbar navbar-dark fixed-top bg-dark justify-content-between">
            <Link className="navbar-brand" to="">Over55</Link>
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
                <li className="nav-item">
                    <NavLink className="nav-link" to="/RegisterPage">Regisger Page</NavLink>
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
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Tables">Tables</NavLink>
                </li>
            </ul>
            <hr className="nav-divider" />
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to="http://inthought.pw/settings/"><i className="fa fa-cog"></i> Settings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="http://inthought.pw/profile/"><i className="fa fa-address-card"></i>
                        Profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="http://inthought.pw/help/"><i className="fa fa-question-circle"></i> Help</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#"><i className="fas fa-sign-out-alt"></i> Logout</NavLink>
                </li>
            </ul>
        </nav>
    </div>            
    )
  }
}
export default SideBarCollapse