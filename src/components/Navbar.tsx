import React, { useState } from 'react';
import Link from 'next/link';
import cookie from 'js-cookie';
import Router from 'next/router';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
} from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    cookie.remove('jwtToken');
    cookie.remove('user');
    Router.push('/');
  };

  const user = cookie.get('user');

  const userLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        {/* <Link href="/"> */}
        <a onClick={logout} href="/" className="nav-link">
          Logout
        </a>
        {/* </Link> */}
      </MDBNavItem>
    </MDBNavbarNav>
  );

  const guestLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <Link href="/login">
          <a className="nav-link">Login</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/register">
          <a className="nav-link">Sign Up</a>
        </Link>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  return (
    <>
      <MDBNavbar
        dark
        expand="md"
        style={{ marginBottom: '20px', backgroundColor: 'purple' }}
      >
        <Link href="/">
          <a className="nav-link text-light">Yelpcamp</a>
        </Link>

        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <Link href="/campgrounds">
              <a className="nav-link">Campgrounds</a>
            </Link>
            {user ? userLinks : guestLinks}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
