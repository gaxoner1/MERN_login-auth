//takes in auhtorization token when log in and sends to headers
//when no auth token ie. log out action - delete token.
//send token in header to each page endpoint to asure authorized to view page.


import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
