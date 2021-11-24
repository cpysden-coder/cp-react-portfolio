import React, { useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './style.css';

function Navlinks(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  return (    
    <Navbar bg="light" expand="lg">
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                  {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </Navbar>
  );
}
export default Navlinks;