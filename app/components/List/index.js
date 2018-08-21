import React from 'react';
import PropTypes from 'prop-types';

function List({ list, loading, error }) {
  let content = <div />;
  // If we have items, render them
  if (list) {
    content = list.map(item => <li key={`item-${item.id}`} item={item} />);
  } else if (loading) {
    // Otherwise render a single component
    content = <li>Still loading!</li>;
  } else if (error) {
    content = <li>Sorry, we could not fetch your list!</li>;
  }

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default List;
