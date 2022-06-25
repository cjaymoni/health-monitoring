import axios from 'axios';
import { Response } from 'cross-fetch';

const API_BASE_URL = process.env.REACT_APP_API_ROOT_URL;

const getHeaders = (api_username = 'admin', api_password = 'passwd') => {
  return {
    Accept: 'application/json',
    'Content-type': 'application/json',
    //Authorization: 'Basic ' + btoa(api_username + ':' + api_password),
  };
};

export const sendGetRequest = async endpoint => {
  let response;
  try {
    response = await axios.get(API_BASE_URL.concat(endpoint), {
      headers: getHeaders(),
    });
    return response;
  } catch (err) {
    // Handle Error Here
    return err;
  }
};

export const sendPostRequest = async (endpoint, data) => {
  let response;
  try {
    response = await axios.post(API_BASE_URL.concat(endpoint), data, {
      headers: getHeaders(),
      withCredentials: false, //you have to change this later
    });
    return response;
  } catch (err) {
    // Handle Error Here
    return err;
  }
};

export const sendPutRequest = async (endpoint, data) => {
  let response;
  try {
    Response = await axios.put(API_BASE_URL.concat(endpoint), data, {
      headers: getHeaders(),
    });
    return response;
  } catch (err) {
    // Handle Error Here
    return err;
  }
};

export const API_ENDPOINTS = {
  PATIENT: 'patients/',
  VISITS: 'visits/',
  APPOINTMENTS: 'appointments/',
  VACCINE: 'vaccine/',
  GHANACARD: 'ghanacard/',
  SPECIALISATION: 'specialisation/',
  VITAL: 'vital/',
};
