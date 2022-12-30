import React from 'react';
import { useState } from 'react';

import 'styles.css';

export function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const onInputText = event => {
    setSearch(event.target.value.trim());
  };

  const onSubmitClick = event => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitClick}>
        <button type="submit" className="SearchForm__button">
          Click
        </button>

        <input
          className="SearchForm__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputText}
          value={search}
        />
      </form>
    </header>
  );
}
