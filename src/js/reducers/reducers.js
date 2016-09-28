const defaultState = {
  user: '',
  repos: [],
  fetching: false,
  error: ''
};

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return Object.assign([], state, {user: action.payload});
      break;
    }
    case 'FETCH_REPOS_PENDING': {
      return Object.assign([], state, {fetching: true, error: false});
      break;
    }
    case 'FETCH_REPOS_FULFILLED': {
      if (action.payload.data.length === 0) {
        return Object.assign([], state, {
          error: 'This user hasn\'t any public repos!',
          repos: [],
          fetching: false
        });
      }
      return Object.assign([], state, {repos: action.payload.data, fetching: false});
      break;
    }
    case 'FETCH_REPOS_REJECTED': {
      if (typeof action.payload.response !== 'undefined') {
        return Object.assign([], state, {
          error: action.payload.response.statusText,
          repos: [],
          fetching: false
        });
      }
      return Object.assign([], state, {
        error: 'Network Error!',
        repos: [],
        fetching: false
      });
      break;
    }
  }
  return state;
};

export default reducer;
