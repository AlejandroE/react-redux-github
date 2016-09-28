import React from 'react';

class Search extends React.Component {

  onSearch() {
    this.props.onSearch(this.refs.userName.value);
  }

  render() {
    return (
      <div className='search'>
        <input className='search__input' ref='userName' type='text'></input>
        <button className='search__button' onClick={this.onSearch.bind(this)}>Find</button>
      </div>
    );
  }
};

export default Search;
