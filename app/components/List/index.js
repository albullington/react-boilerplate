import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

function List(props) {
  let content = ['string 1', 'string2'];

  // If we have items, render them
  if (props.list) {
    content = props.list.map(item => (
      <li key={`item-${item.id}`} item={item} />
    ));
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
  component: PropTypes.func.isRequired,
  list: PropTypes.array,
};

export default List;
