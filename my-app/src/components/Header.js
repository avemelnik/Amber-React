import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="Header">
            <header className="fixed-top">
                <div className="upper-part-of-header">
                    <div className="container align-items-between">
                        <nav
                            className="d-flex flex-row navbar align-items-center align-content-center justify-content-between">
                            <form className="form-inline form-search">
                                <input type="search" className="form-control" placeholder="Search"/>
                                <button type="submit" className="btn-sbm"><i className="fa fa-search"></i></button>
                            </form>
                            <ul className="d-flex flex-row align-items-center justify-content-end inline mb-0">
                                <li className="nav-item">
                                    <a className="nav-link enter-link login" href="#">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link enter-link register" href="#">Register</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="lower-part-of-header">
                    <div className="container d-flex flex-row justify-content-between">
                       {/*<nav className="navbar navbar-toggleable-md navbar-dark bg-black">*/}

                            <h1><a className="navbar-brand" href="/"><img src={logo}/></a></h1>

                            {/*<div className="collapse navbar-collapse justify-content-end" id="collapsingNavbar2">*/}
                                <ul className="navbar-nav text-center d-flex flex-row">
                                    <li className="nav-item nav-section active">
                                        <a className="nav-link section-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item nav-section active">
                                        <a className="nav-link section-link" href="pGallery">Typography</a>
                                    </li>
                                    <li className="nav-item nav-section">
                                        <a className="nav-link section-link" href="/mBlo">Blog</a>
                                    </li>
                                    <li className="nav-item nav-section active">
                                        <a className="nav-link section-link" href="/port">Pages</a>
                                    </li>
                                    <li className="nav-item nav-section">
                                        <a className="nav-link section-link" href="/ell">Elements</a>
                                    </li>
                                    <li className="nav-item nav-section">
                                        <a className="nav-link section-link" href="#">eCommerse</a>
                                    </li>
                                    <li className="nav-item nav-section">
                                        <a className="nav-link section-link" href="#">Mega menu</a>
                                    </li>
                                </ul>
                            {/*</div>*/}
                           {/*<button className="navbar-toggler navbar-toggler-right custom-toggler" type="button"*/}
                                   {/*data-toggle="collapse"*/}
                                   {/*data-target="#collapsingNavbar2" aria-controls="navbarSupportedContent"*/}
                                   {/*aria-expanded="false"*/}
                                   {/*aria-label="Toggle navigation">*/}
                               {/*<span className="navbar-toggler-icon"></span>*/}
                           {/*/!*</button>*!/*/}
                        {/*</nav>*/}
                    </div>
                </div>
            </header>
            </div>
        );
    }
}

export default Header;


