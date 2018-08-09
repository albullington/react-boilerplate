import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

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
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <ul>{content}</ul>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array,
};

export default List;
