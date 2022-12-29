import 'styles.css';
import PropTypes from 'prop-types';
export function ButtonLoad({ onClick }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
}

ButtonLoad.propTypes = {
  onclick: PropTypes.func,
};
