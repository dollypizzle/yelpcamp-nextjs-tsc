import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import axios from '../../axios-order';
import Table from './Table';
import Navbar from '../Navbar';
import { MDBContainer } from 'mdbreact';

export interface IntCamp {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  owner: string;
}

type ShowProps = {
  id: string;
};

export interface IntUser {
  _id: string;
}

const Show = ({ id }: ShowProps) => {
  const [campground, setCampground] = useState<IntCamp | null>(null);

  const [user, setUser] = useState<IntUser | null>(null);

  useEffect(() => {
    const authUser = cookie.get('user');
    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    axios
      .get(`/campground/${id}`)
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground && (
        <Table
          obj={campground}
          userId={user ? user._id : ''}
          key={campground._id}
        />
      )
    );
  };

  return (
    <>
      <Navbar />
      <MDBContainer>{tabRow()}</MDBContainer>;
    </>
  );
};

export default Show;
