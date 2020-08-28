import React from "react";
import {Link, useLocation} from "react-router-dom";

function NavTabs(){
    const location = useLocation();
    return(
        <ul className="nav nav-tabs">
            <li className="nav-items">
                <Link to="/Home" className={location.pathname ==="/Home" ? "nav-link active":"nav-link"}>
                    Home
                </Link>
            </li>
            <li className ="nav-items">
                <Link to="/Employee" className={location.pathname === "/Employee" ? "nav-link active" : "nav-link"}>
                    Employee
                </Link>
            </li>
        </ul>
    
    )
}

export default NavTabs;