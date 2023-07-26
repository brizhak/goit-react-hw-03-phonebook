import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

class Filter extends Component {
  static defaultProps = {
    filter: '',
    handleFilter: '',
  };

  static propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    const { filter, handleFilter } = this.props;

    return (
      <>
        <label className={style.label}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            placeholder="Enter name"
            value={filter}
            onChange={handleFilter}
          />
        </label>
      </>
    );
  }
}

export default Filter;
