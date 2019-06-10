import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

const menuData = [
    {
        title: "Login Page",
        url: "/LoginPage"
    },
    {
        title: "Reset Page",
        url: "/ResetPage"
    },
    {
        title: "Register Page",
        url: "",
        children:[
            {
                title: "Register Form",
                url: "/RegisterPage"
            },
            {
                title: "Success Page",
                url: "/SuccessPage"
            },            
        ]
    },
    {
        title: "Top Menu",
        url: "/TopMenu"
    },
    {
        title: "Dashboard",
        url: "/Dashboard"
    },
    {
        title: "Widget",
        url: "/Widgets"
    },
    {
        title: "Status Pages",
        url: "",
        children:[
            {
                title: "Please Wait",
                url: "/PleaseWait"
            },
            {
                title: "Bad Request Error 400",
                url: "/BadRequest400"
            },
            {
                title: "Server Error 500",
                url: "/InternalServerError500"
            }
        ]
    },
    {
        title: "Not Found 404",
        url: "/NotFound404"
    },
    {
        title: "Server Error 500",
        url: "/ServerError500"
    },
    {
        title: "Icons",
        url: "/Icons"
    },
    {
        title: "Buttons",
        url: "/Buttons"
    },
    {
        title: "Cards",
        url: "/Cards"
    },
    {
        title: "Modals",
        url: "",
        children:[
            {
                title: "Modal1",
                url: "/Modal1"
            },
            {
                title: "Modal2",
                url: "/Modal2"
            }
        ]
    },
    {
        title: "Tables",
        url: "",
        children:[
            {
                title: "Table 1",
                url: "/Table1"
            },
            {
                title: "Table 2",
                url: "/Table2"
            },   
            {
                title: "Table 3",
                url: "/Table3"
            },          
        ]
    },
    {
        title: "Forms",
        url: "",
        children:[
            {
                title: "Form Elements",
                url: "/FormElements"
            },
            {
                title: "Form Validations",
                url: "/FormValidations"
            },   
            {
                title: "Dropdown",
                url: "/Dropdown"
            },   
            {
                title: "Country Province Selector",
                url: "/CountryProvince"
            },  
            {
                title: "Dropzone",
                url: "/Dropzone"
            }    
        ]
    },
    {
        title: "List Page",
        url: "/ListPage"
    },
    {
        title: "Details Page",
        url: "",
        children:[
            {
                title: "Detail 1",
                url: "/DetailsPage1"
            },
            {
                title: "Detail 2",
                url: "/DetailsPage2"
            },            
        ]
    },
    {
        title: "Pages",
        url: "",
        children:[
            {
                title: "Comments Page",
                url: "/CommentsPage"
            },
            {
                title: "Search Page",
                url: "/SearchPage"
            },     
            {
                title: "Invoice",
                url: "/Invoice"
            },
            {
                title: "File Upload",
                url: "/FileUpload"
            },         
        ]
    },
    {
        title: "Wizards",
        url: "",
        children:[
            {
                title: "Steps",
                url: "",
                children:[
                    {
                        title: "Step 1",
                        url: "/Step1"
                    },
                    {
                        title: "Step 2",
                        url: "/Step2"
                    },  
                    {
                        title: "Step 3",
                        url: "/Step3"
                    }, 
                    {
                        title: "Step 4",
                        url: "/Step4"
                    }, 
                    {
                        title: "Step 5",
                        url: "/Step5"
                    },           
                ]
            },
            {
                title: "Panel",
                url: "/Panel"
            },            
        ]
    },
    {
        title: "Google Maps",
        url: "/GoogleMaps"
    },
    {
        title: "Charting",
        url: "",
        children:[
            {
                title: "CanvasJS",
                url: "/CanvasJS",
            },
            {
                title: "Recharts",
                url: "/Recharts",
            }
        ]
    }
  ]

class ItemNode extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    toggle = () => {
        // console.log("isOpen:", this.state.isOpen);
        this.setState({
            isOpen: !this.state.isOpen
        })
        // this.forceUpdate();
    }

    render() {
        const { title, url, children } = this.props.menuData;
        const sideMenuToggle = this.props.sideMenuToggle;
        if(children)
        {
            return (
                <li className="nav-item dropdown-btn">
                    <Link className={`nav-link ${ this.state.isOpen ? "rotate-90" : ""}`} to="#" onClick={ this.toggle }>
                        { title } <i className="fa fa-caret-right" ></i>
                    </Link>
                    <ul style={{ display: this.state.isOpen ? "block" : "none"}}>
                        { children.map((item, index) => (<ItemNode menuData={ item } key={ index } sideMenuToggle = { sideMenuToggle }></ItemNode>)) }
                    </ul>
                </li>)
        }
        else
        {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to={ url } onClick = { sideMenuToggle }>{ title }</NavLink>
                </li>)
            
        }
    }
}
class SideBarCollapse extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            active: false
        }

        this.sideMenuToggle = this.sideMenuToggle.bind(this);
    }

    sideMenuToggle() {
        this.setState({
            active: !this.state.active
        })
    }

  render() {
    return (
    <div>
        <header className="top-navbar navbar navbar-dark fixed-top bg-dark justify-content-between">
            <Link className="navbar-brand" to="#">Inthought</Link>
            <ul className="navbar-nav mr-auto flex-row">
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                        <i className="far fa-user"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link title="Lock screen" className="nav-link" to="#">
                        <i className="fas fa-lock"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                        <i className="fa fa-inbox"></i>
                    </Link>
                </li>
                <li className="dropdown-list dropdown nav-item">
                    <Link aria-haspopup="true" to="#" className="dropdown-toggle-nocaret nav-link" aria-expanded="false">
                        <i className="fa fa-bell"></i>
                        <span className="badge badge-danger">11</span>
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                    <form className="form-inline search-form ml-0 my-2 my-lg-0">
                        <input className="form-control search-box mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="nav-link search-button" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </li>
                <li className="nav-item">
                <button className={`navbar-toggler ${ this.state.active ? "active" : ""}` } type="button" id="sidebarCollapse" 
                    onClick = { this.sideMenuToggle }>
                    <i className="fa fa-bars"></i>
                </button>
                </li>                
            </ul>
            
        </header>
        <nav id="sidebar" className={ `${ this.state.active ? "active" : ""}` }>
            <div className="sideMenuTouchGlass" 
                onClick={ this.sideMenuToggle } 
                style={{ display: this.state.active ? "block" : "none"}}></div>
            <Scrollbars>
                <p className="text-center text-light mt-3 mb-2">Hi, Rodolfo</p>
                    <hr className="nav-divider" />
                    <ul className="nav flex-column">
                        { menuData.map((item, index)=>(<ItemNode menuData={item} key={index} sideMenuToggle={this.sideMenuToggle}></ItemNode>)) }
                    </ul>
                </Scrollbars>
        </nav>
    </div>            
    )
  }
}
export default SideBarCollapse

/* <p className="text-center text-light mt-3 mb-2">Hi, Rodolfo</p>
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
            <li className="nav-item">
                <NavLink className="nav-link" to="/FileUpload">File Upload</NavLink>
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
    <li className="nav-item">
        <NavLink className="nav-link" to="/Charting">Charting</NavLink>
    </li>
</ul> */