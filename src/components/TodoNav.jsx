import React from 'react';

export default function TodoNav({ filters, onChangeFilter }) {
  const handleClick = (e) => {onChangeFilter(e.target.innerText.toLowerCase())}

  return (
    <nav>
      <ul onClick={handleClick}>
        {filters.map(filter => <li key={filter}>{filter}</li>)}
      </ul>
    </nav>
  );
}

