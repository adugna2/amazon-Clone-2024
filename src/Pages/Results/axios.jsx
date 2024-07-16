
// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com' // Ensure this is the correct base URL
});

export default instance;


