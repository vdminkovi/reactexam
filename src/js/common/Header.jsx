import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../Main'

function Header(props) {
  return (
    <div className="header-container">
      <div className="row no-gutters">
        <div className="col-12">
          <div className="row no-gutters align-items-center">
            <div className="col-3 align-items-center">
              <header className="site-header">
                <nav className="main-nav">
                  <ul className="nav">
                    <li className="nav-link"><Link to="/">Home</Link></li>
                    <li className="nav-link"><Link to="/search">Search</Link></li>
                  </ul>
                </nav>
              </header>
            </div>
            <div className="col-9 align-items-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
