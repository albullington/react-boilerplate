import React from 'react';
import PropTypes from 'prop-types';

function List({ list }) {
  let content = <div />;
  // If we have items, render them
  if (list) {
    content = list.map(item => <li key={`item-${item.id}`} item={item} />);
  } else {
    // Otherwise render a single component
    content = <li />;
  }

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array,
};

export default List;
