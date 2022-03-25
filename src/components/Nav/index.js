import React from "react";

function Nav(props) {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Brett Claus</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={ () => props.handleView('default')} href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={ () => props.handleView('portfolio')}href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={ () => props.handleView('about')} href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={ () => props.handleView('contact')} href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;