import React from 'react';

// Stateless functional component
const Navbar = ({ totalCounters, totalCount }) => {
  console.log('Navbar - render()');
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Counter App
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Total Count: <span className="badge badge-pill badge-secondary">{totalCount}</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Total Counters:
              <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
