import axios from 'axios';
import store from '../stores/store';

export function setUser(name) {
  return {
    type: 'SET_USER',
    payload: name
  };
};

export function fetchRepos() {
  return {
    type: 'FETCH_REPOS',
    payload: axios.get(`https://api.github.com/users/${store.getState().user}/repos`)
  };
};
