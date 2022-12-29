import React from 'react';
import 'styles.css';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
      console.log(event.key);
    }
  };

  onBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.onBackDropClick}>
        <div className="Modal">
          <img src={this.props.largeImgUrl} alt="" />
        </div>
      </div>
    );
  }
}
