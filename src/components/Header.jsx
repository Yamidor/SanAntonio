import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.css'

import Logo from '../img/logo.jpg'
const Header =({children}) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" className="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <Link className="nav-item nav-link" to="/mision">
                        Misión
                    </Link>
                    <Link className="nav-item nav-link" to="/vision">
                        Visión
                    </Link>
                    <Link className="nav-item nav-link" to="/vision">
                        Filosofia
                    </Link>
                    <Link className="nav-item nav-link" to="/vision">
                        Historia
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Header;