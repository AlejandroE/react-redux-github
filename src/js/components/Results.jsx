import React from 'react';

const Results = ({repos, error}) => {
  if (error !== false) {
    return <div className='error'><span>{error}</span></div>;
  }

  const list = repos.map(
    ({id, name, html_url}) => {
      return (
        <li key={id} className='results__item'>
          {name}, <a href={html_url} ><i>{html_url}</i></a>
        </li>
      );
    }
  );
  return (
    <div className='results'>
      <ul className='results__list'>{list}</ul>
    </div>
  );
};

export default Results;
