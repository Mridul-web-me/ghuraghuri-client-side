import React from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './Nav.css'

function Nav() {
    // const { user, logOut } = useAuth();
    return (

        <div className="menu sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <i className="far fa-compass"></i>
                        Ghura<span className="red">Ghuri</span>
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

                                <button className="drpbtn">Pages <i className="fas fa-sort-down" ></i></button>

                                <div className="dropdownItem">
                                    <Link className="nav-link" to="/destination">Popular Destination</Link>
                                    <Link className="nav-link" to="/elements">Elements</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Contact</Link>
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
                            </li>
                            <p className="m-2">{user.displayName}</p> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Nav;