import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { GET_USERS } from '../actions/types';

export function loadUsers() {
  console.log("loadUsers");
  return (dispatch) => {
    axios.get(`${apiPrefix}/users`)
    .then((response) => {
      dispatch({
        type: GET_USERS,
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

