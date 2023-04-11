import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar({ navLinks }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light px-4">
            <Link className="navbar-brand px-3" to="/">Graphictoria</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="nav-item">
                            <Link className="nav-link px-3" to={navLink.url}>{navLink.name}</Link>
                        </li>
                    ))}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle px-3" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
