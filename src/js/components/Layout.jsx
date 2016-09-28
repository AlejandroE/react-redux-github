import React from 'react';
import { connect } from 'react-redux';
import { setUser, fetchRepos } from '../actions/actions';

import Search from './Search';
import Results from './Results';

@connect((store)=> {
  return {
    user: store.user,
    repos: store.repos,
    error: store.error,
    fetching: store.fetching
  };
})

class Layout extends React.Component {

  fetchUserRepos(name) {
    this.props.dispatch(setUser(name));
    this.props.dispatch(fetchRepos());
  }

  render() {
    return (
      <div className="layout">
          <Search onSearch={this.fetchUserRepos.bind(this)}/>
          <Results repos={this.props.repos} error={this.props.error}/>
      </div>
    );
  }
}

export default Layout;
