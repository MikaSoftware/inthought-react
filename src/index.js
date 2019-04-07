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
import Cards from './components/Cards';
import FormElements from './components/FormElements';
import FormValidations from './components/FormValidations';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import ListPage from './components/ListPage';
import DetailsPage1 from './components/DetailsPage1';
import DetailsPage2 from './components/DetailsPage2';
import CommentsPage from './components/CommentsPage';
import SearchPage from './components/SearchPage';
import Invoice from './components/Invoice';

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
        <Route path="/Cards" component={Cards} />
        <Route path="/FormElements" component={FormElements} />
        <Route path="/FormValidations" component={FormValidations} />
        <Route path="/Table1" component={Table1} />
        <Route path="/Table2" component={Table2} />
        <Route path="/ListPage" component={ListPage} />
        <Route path="/DetailsPage1" component={DetailsPage1} />
        <Route path="/DetailsPage2" component={DetailsPage2} />
        
        <Route path="/CommentsPage" component={CommentsPage} />
        <Route path="/SearchPage" component={SearchPage} />

        <Route path="/Invoice" component={Invoice} />

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
