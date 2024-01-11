import css from './filter.module.css';

const Filter = ({ onChange }) => {
  return (
    <input
      className={css.input}
      onChange={onChange}
      name="filter"
      placeholder="Search"
    />
  );
};

export default Filter;
