import React from 'react';
import PropTypes from 'prop-types';
import 'styles.css';
import { useEffect } from 'react';

export function Modal({ closeModal, largeImgUrl, tags }) {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
        console.log(event.key);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [closeModal]);

  const onBackDropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <div className="Overlay" onClick={onBackDropClick}>
      <div className="Modal">
        <img src={largeImgUrl} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  alt: PropTypes.string,
  largeImgUrl: PropTypes.string.isRequired,
};
