import reducer from 'js/reducers/reducers';
import * as actions from 'js/actions/actions';

describe('Reducer', function(){
  it('returns an object with empty properties as default state', function(){
    let action = { type: 'unknown' };
    let newState = reducer(undefined, { type: 'unknown' });
    let emptyState = {
      user: '',
      repos: [],
      fetching: false,
      error: ''
    };
    expect(newState).to.deep.equal(emptyState);
  });

  describe('on SET_USER', function(){
    it('returns the correct name in given action', function(){
      let userName = 'Alejandro';
      let action = actions.setUser(userName);
      let newState = reducer(undefined, action);
      expect(newState.user).to.equal(userName);
    });
  });

  describe('on FETCH_REPOS_PENDING', function(){
    it('returns fetching true in given action', function(){
      let action = {type: 'FETCH_REPOS_PENDING'}
      let newState = reducer(undefined, action);
      expect(newState.fetching).to.equal(true);
    });
  });

  describe('on FETCH_REPOS_FULFILLED', function(){
    it('returns an array of repos in given action', function(){
      let action = {
        type: 'FETCH_REPOS_FULFILLED',
        payload: {data: [1,2,3,4,5] } };
      let newState = reducer(undefined, action);
      expect(newState.repos).to.have.length(action.payload.data.length);
      expect(newState.fetching).to.equal(false);
    });

    it('returns an error if repos array is empty', function(){
      let action = {
        type: 'FETCH_REPOS_FULFILLED',
        payload: {data: [] } };
      let newState = reducer(undefined, action);
      expect(newState.repos).to.have.length(0);
      expect(newState.fetching).to.equal(false);
      expect(newState.error).to.have.length.above(0);
    });
  });

  describe('on FETCH_REPOS_REJECTED', function(){
    it('returns the error given by the payload', function(){
      let action = {
        type: 'FETCH_REPOS_REJECTED',
        payload: {data: [1,2,3,4,5], response: {statusText: 'Error!!'} } };
      let newState = reducer(undefined, action);
      expect(newState.repos).to.have.length(0);
      expect(newState.fetching).to.equal(false);
      expect(newState.error).to.equal(action.payload.response.statusText);
    });

    it('returns a network error', function(){
      let action = {
        type: 'FETCH_REPOS_REJECTED',
        payload: { } };
      let newState = reducer(undefined, action);
      expect(newState.repos).to.have.length(0);
      expect(newState.fetching).to.equal(false);
      expect(newState.error).to.equal('Network Error!');
    });
  });

});