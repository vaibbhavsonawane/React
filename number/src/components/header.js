import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <div className="row">
                <div className="col-12">
                    {/* <div className="logo text-center">
                        <Link to="/">ancient - magic</Link>
                    </div> */}
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <Link className="navbar-brand" to="/">ancient - magic</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/lucky_number">rulling number</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fadic_number">destiny number</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/history">History</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="#">Disabled</Link>
                            </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;

