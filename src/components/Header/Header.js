import React from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../images/brandLogo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-section">
            <nav class="navbar navbar-expand-lg navbar-light pt-3 container">
                <Link class="navbar-brand" href="#">
                    <img style={{height: "50px"}} src={brandImg} alt="brand-logo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ml-3">
                            <Link class="nav-link normal-nav-link" href="#">Home</Link>
                        </li>
                        <li class="nav-item ml-3">
                            <Link class="nav-link normal-nav-link" href="#">Donation</Link>
                        </li>
                        <li class="nav-item ml-3">
                            <Link class="nav-link normal-nav-link" href="#">Events</Link>
                        </li>
                        <li class="nav-item ml-3">
                            <Link class="nav-link normal-nav-link" href="#">Blog</Link>
                        </li>
                        <li class="nav-item ml-3">
                            <Link class="nav-link btn btn-primary btn-lg text-white px-4" href="#">Register</Link>
                        </li>
                        <li class="nav-item ml-3">
                            <Link class="nav-link btn btn-dark btn-lg text-white px-4" href="#">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;