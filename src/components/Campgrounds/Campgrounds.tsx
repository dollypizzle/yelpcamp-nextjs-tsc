import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../axios-order';
import Navbar from '../Navbar';
import Body from './Body';
import cookie from 'js-cookie';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Campgrounds = () => {
  const [campground, setCampground] = useState<[]>([]);

  useEffect(() => {
    axios
      .get('/campgrounds')
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground &&
      campground.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  const user = cookie.get('token');

  const userLinks = (
    <p className="lead">
      <p>
        <Link href="/new" as="/new">
          <a className="btn btn-purple btn-lg">Add New Campground</a>
        </Link>
      </p>
    </p>
  );

  const guestLinks = <div></div>;

  return (
    <>
      <Navbar />
      <div style={{ marginBottom: '10px' }} className="container">
        <header className="jumbotron">
          <div className="container">
            <h1>Welcome To YelpCamp</h1>
            <p>View our hand picked campgrounds from all over the world</p>
            {user ? userLinks : guestLinks}
          </div>
        </header>

        <div
          className="row text-center"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tabRow()}
        </div>
      </div>
    </>
  );
};

export default Campgrounds;
