import React, { useState, useEffect, SyntheticEvent } from 'react';
import axios from '../../axios-order';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Navbar from '../Navbar';
import cookie from 'js-cookie';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

type EditProps = {
  id: string;
};

const Edit = ({ id }: EditProps): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setImage(event.target.value);
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);

  useEffect(() => {
    axios
      .get(`/campground/${id}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
        setImage(response.data.image);
        setDescription(response.data.description);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const obj = {
      name: name,
      price: price,
      image: image,
      description: description,
    };
    const token = cookie.get('token');
    axios
      .patch(`/campground/${id}`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => Router.push(`/campground/${id}`));
  };

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5 pb-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={onSubmit}>
                  <p className="h4 text-center py-2">Edit {name}</p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="image"
                      className="form-control"
                      value={image}
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
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
export default Edit;
