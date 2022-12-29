import 'styles.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ img, largeImgUrl, getUrl, alt }) => {
  return (
    <li className="ImageGalleryItem ">
      <img
        src={img}
        alt={alt}
        className="ImageGalleryItem__image"
        onClick={() => {
          getUrl(largeImgUrl);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  getUrl: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
