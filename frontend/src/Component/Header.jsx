import React from 'react';
import logo from '../img/logo.png';

export const Header = () => {
    return (
        <header className="d-flex justify-content-center py-3">
            <a href="/" className="d-flex col-md-8 mb-6 mb-md-0 text-dark text-decoration-none ms-auto">
                <img width="70" height="72" src={logo} alt="Logo" />
            </a>
            <ul className="nav mx-5 col-12 col-md-auto mb-2 justify-content-center mb-md-0 fs-5">
                <li className="nav-item"><a href="#" className="nav-link active text-dark fw-bold" aria-current="page">Home</a></li>
                {/* <li className="nav-item"><a href="#" className="nav-link text-dark fw-bold">Diagrams</a></li> */}
            </ul>
            
        </header>


        
    );
};
