import css from '../Loader/Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.lds_circle}>
      <div></div>
    </div>
  );
};
