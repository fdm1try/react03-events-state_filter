import classes from './Portfolio.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '../Toolbar';

const Portfolio = ({ items }) => {
  const [filteredItems, filterItems] = useState(items);
  const noFilter = 'All';
  const filters = [noFilter, ...new Set(items.map((item) => item.category))];
  const [selectedFilter, changeSelectedFilter] = useState(noFilter);

  function onSelectFilter(category){
    if (selectedFilter === category) return;
    changeSelectedFilter(category);
    filterItems(category === noFilter ? items : items.filter((item) => item.category === category))
  }

  return (
    <div className={classes['portfolio']}>
      <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={onSelectFilter} />
      <div className={classes['portfolio-items']}>
        {filteredItems.map((item) => 
          (
            <div className={classes['portfolio-item']} key={item.id}>
              <img className={classes['portfolio-item_img']} src={item.img} alt={item.category} />
            </div>
          )
        )}
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      category: PropTypes.string
    })
  )
}


export { Portfolio };
