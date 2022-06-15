import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dolly-yelpcamp-tsc-api.herokuapp.com/',
});

// const instance = axios.create({
//   baseURL: 'http://localhost:4000',
// });

export default instance;
