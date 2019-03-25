import React from 'react'
import ReactDOM from 'react-dom'

// import './index.css'
// import './assets/css/base.css'
// import './assets/css/custom.css'
// import './assets/css/fullcalendar.min.css'
// import './assets/css/fullcalendar.print.min.css'

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'


import App from './components/app'
import Users from './components/users'
import Contact from './components/contact'

import SideBarCollapse from './components/SideBarCollapse'

import * as serviceWorker from './serviceWorker'
import LoginPage from './components/LoginPage';
import ResetPage from './components/ResetPage';
import TopMenu from './components/TopMenu';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import Widgets from './components/Widgets';
import NotFound404 from './components/NotFound404'
import ServerError500 from './components/ServerError505';
import Icons from './components/Icons';
import Buttons from './components/Buttons';

const routing = (
  <Router>
    <div>
      <SideBarCollapse></SideBarCollapse>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />

        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/ResetPage" component={ResetPage} />
        <Route path="/RegisterPage" component={RegisterPage} />
        <Route path="/TopMenu" component={TopMenu} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Widgets" component={Widgets} />
        <Route path="/NotFound404" component={NotFound404} />
        <Route path="/ServerError500" component={ServerError500} />
        <Route path="/Icons" component={Icons} />
        <Route path="/Buttons" component={Buttons} />        

        <Route component={NotFound404} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
