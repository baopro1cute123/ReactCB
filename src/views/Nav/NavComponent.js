import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss';
class NavComponent extends React.Component {

    render(){
        return(
            <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/todo">Todos</Link>
            <Link to="/about">About</Link>
          </div>
        )
        
    }
}
export default NavComponent 