import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import 'styles.css';
export function ImageGallery({ list, getUrl }) {
  return (
    <ul className="ImageGallery ">
      {list.map(item => (
        <ImageGalleryItem
          key={item.id}
          img={item.webformatURL}
          largeImgUrl={item.largeImageURL}
          getUrl={getUrl}
          alt={item.tags}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
  getUrl: PropTypes.func.isRequired,
};
