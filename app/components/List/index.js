/*
 * ListPage
 *
 * This is the page that displays a list of strings, at the '/list' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class ListPage extends React.PureComponent {
  render() {
    const list = ['string1', 'string2', 'string3']; // need to change this to props
    const renderedList = list.map(item => <li key={item}>{item}</li>);

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <ul>{renderedList}</ul>
      </div>
    );
  }
}
