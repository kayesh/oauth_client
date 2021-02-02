import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
    return (
        <header className="site-header">
          <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                  School
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggle">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>
    );
}
