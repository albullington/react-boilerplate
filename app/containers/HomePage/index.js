/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from './Button';
import Form from './Form';
import Input from './Input';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // console.log(e.target.value);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Form>
          <Input
            type="text"
            placeholder="Enter a string here"
            onChange={this.handleChange}
          />
          <Button onClick={this.handleClick} type="submit" />
        </Form>
      </div>
    );
  }
}
