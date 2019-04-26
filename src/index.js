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

import ScrollUpButton from "react-scroll-up-button";

import App from './components/app'

import SideBarCollapse from './components/SideBarCollapse'

import * as serviceWorker from './serviceWorker'
import LoginPage from './components/LoginPage';
import ResetPage from './components/ResetPage';
import TopMenu from './components/TopMenu';
import RegisterPage from './components/Register/RegisterPage';

import Dashboard from './components/Dashboard';
import Widgets from './components/Widgets';
import NotFound404 from './components/NotFound404'
import ServerError500 from './components/ServerError505';
import Icons from './components/Icons';
import Buttons from './components/Buttons';
import Cards from './components/Cards';

import FormElements from './components/Forms/FormElements';
import FormValidations from './components/Forms/FormValidations';

import Table1 from './components/Tables/Table1';
import Table2 from './components/Tables/Table2';

import ListPage from './components/ListPage';

import DetailsPage1 from './components/DetailsPages/DetailsPage1';
import DetailsPage2 from './components/DetailsPages/DetailsPage2';

import CommentsPage from './components/Pages/CommentsPage';
import SearchPage from './components/Pages/SearchPage';
import Invoice from './components/Pages/Invoice';

import Step1 from './components/Wizards/Steps/Step1';
import SuccessPage from './components/Register/SuccessPage';
import Step2 from './components/Wizards/Steps/Step2';
import Step3 from './components/Wizards/Steps/Step3';
import Step4 from './components/Wizards/Steps/Step4';
import Step5 from './components/Wizards/Steps/Step5';
import Panel from './components/Wizards/Panels/Panel';
import GoogleMaps from './components/GoogleMaps';
import CanvasJS from './components/Charting/CanvasJS';
import FileUpload from './components/Pages/FileUpload';
import Dropdown from './components/Forms/Dropdown';
import Recharts from './components/Charting/Recharts';
import CountryProvince from './components/Forms/CountryProvince';

const routing = (
  <Router>
    <div>
      <SideBarCollapse></SideBarCollapse>

      <Switch>
        <Route exact path="/" component={App} />

        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/ResetPage" component={ResetPage} />
        <Route path="/RegisterPage" component={RegisterPage} />
        <Route path="/SuccessPage" component={SuccessPage} />

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
        <Route path="/Dropdown" component={Dropdown} />
        <Route path="/CountryProvince" component={CountryProvince} />

        <Route path="/Table1" component={Table1} />
        <Route path="/Table2" component={Table2} />
        
        <Route path="/ListPage" component={ListPage} />
        <Route path="/DetailsPage1" component={DetailsPage1} />
        <Route path="/DetailsPage2" component={DetailsPage2} />
        <Route path="/FileUpload" component={FileUpload} />
        
        <Route path="/CommentsPage" component={CommentsPage} />
        <Route path="/SearchPage" component={SearchPage} />

        <Route path="/Invoice" component={Invoice} />

        <Route path="/Step1" component={Step1} />
        <Route path="/Step2" component={Step2} />
        <Route path="/Step3" component={Step3} />
        <Route path="/Step4" component={Step4} />
        <Route path="/Step5" component={Step5} />
        
        <Route path="/Panel" component={Panel} />

        <Route path="/GoogleMaps" component={GoogleMaps} />

        <Route path="/CanvasJS" component={CanvasJS} />
        <Route path="/Recharts" component={Recharts} />

        <Route component={NotFound404} />
      </Switch>
      <ScrollUpButton />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
