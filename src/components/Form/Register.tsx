import React, { useState, SyntheticEvent } from 'react';
import Router from 'next/router';
import axios from '../../axios-order';
import Navbar from '../Navbar';
import cookie from 'js-cookie';
import Link from 'next/link';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

const Register = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post('/register', data)
      .then(response => {
        if (response.data) {
          cookie.set('token', response.data.token);
          cookie.set('user', JSON.stringify(response.data.user));
          Router.push('/campgrounds');
        } else {
          console.log('Register Error');
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  if (cookie.get('token')) {
    Router.push('/campgrounds');
  }

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center pb-5 my-5">
          <MDBCol sm="12" md="8" lg="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-2">Register</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      Submit
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;
