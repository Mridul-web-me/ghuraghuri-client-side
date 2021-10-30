import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './Nav.css'

function Nav() {
    // const { user, logOut } = useAuth();
    return (
        <BrowserRouter>
            <div className="menu sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-primary" to="/home">
                            <i className="far fa-compass"></i>
                            Ghura<span>Ghuri</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/destination">Destination</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link " to="">Pages
                                        <i className="fas fa-sort-down"></i>
                                    </Link>
                                    <div className="dropdownItem">
                                        <Link className="nav-link" to="/destinationDetails">Destination Details</Link>
                                        <Link className="nav-link" to="/elements">Elements</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                {/* <li className="nav-item">

                                {
                                    user?.email ?
                                        <Link
                                            className="nav-link login text-white"
                                            onClick={logOut} to="/"
                                        >Logout</Link>
                                        :
                                        <Link className="nav-link login text-white" to="/login">Login</Link>
                                }
                            </li> */}
                                {/* <p className="m-2">{user.displayName}</p> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </BrowserRouter>
    )
}

export default Nav;