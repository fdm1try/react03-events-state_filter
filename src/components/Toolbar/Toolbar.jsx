import classes from './Toolbar.module.css';
import PropTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className={classes['toolbar']}>
      {filters.map((filter) => (
        <button 
          key={`filter-${filter.replace(/\s/g, '')}`}
          disabled={filter === selected} 
          onClick={onSelectFilter.bind(null, filter)}
          className={`${classes['toolbar-item']} ${filter === selected ? classes['toolbar-item_active'] : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}


export { Toolbar };
