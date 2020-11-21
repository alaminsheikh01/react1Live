import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (<>

        <div className="constainer-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink class="navbar-brand" 
            to="/">LOGO HERE</NavLink>
            <button 
            class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div 
            class="collapse navbar-collapse" 
            id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item active">
                        <NavLink exact activeClassName="menu_active" 
                        className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link" to="/service">Services</NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                </ul>

            </div>
        </nav>

        </div>
            </div>
        </div>

    </>
    )
}
export default Navbar;