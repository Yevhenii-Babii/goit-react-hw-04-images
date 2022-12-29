import React from 'react';

import 'styles.css';

export class Searchbar extends React.Component {
  state = {
    search: '',
  };

  onInputText = event => {
    this.setState({
      search: event.target.value.trim(),
    });
  };

  onSubmitClick = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitClick}>
          <button type="submit" className="SearchForm__button">
            Click
          </button>

          <input
            className="SearchForm__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputText}
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}
